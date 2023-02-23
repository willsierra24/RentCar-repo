const bcryptjs = require("bcryptjs");
const Cars = require("../Models/Cars");
const Users = require("../Models/Users");
const userSchema = require("../Models/Users");
const { validateCreate } = require("../Validators/Users.js");
const { eMail1 } = require("../Nodemailer/Mailer.js");
const { validateUser } = require("../Assistant/usersAssistant");

/**
 * It takes the licensePlate of a car and the eMail of a user, then it checks if the user has the car
 * in his favorites, if he does, it removes it, if he doesn't, it adds it
 * @param req - The request object.
 * @param res - The response object.
 */
const routerGetFavorite = async (req, res) => {
  try {
    const { favori, eMail } = req.body;
    let users = await Users.findOne({ eMail });
    let cars = await Cars.find({ licensePlate: favori });
    let favorites = users.favorites;
    let flag = [];
    if (favorites.length) {
      favorites.forEach((element, index) => {
        if (element.licensePlate === favori) {
          flag.push(element);
          users.favorites.splice(index, 1);
        }
      });
      if (flag.length === 0) favorites.push(cars[0]);
    } else favorites.push(cars[0]);
    await userSchema.updateOne({ _id: users.id }, { $set: favorites });
    await users.save();
    res.status(200).json(users.favorites);
  } catch (error) {
    res.status(500).send(`{messaje: ${error}}`);
  }
};
/**
 * It creates a new user in the database
 * @param req - The request object.
 * @param res - The response object.
 */

const routerPostUser = async (req, res) => {
  try {
    validateCreate;
    validateUser(req, res);
    const user = userSchema(req.body);
    let passwordHash = await bcryptjs.hash(user.password, 8);
    const newUser = await new Users({
      dni: user.dni,
      name: user.name,
      eMail: user.eMail,
      password: passwordHash,
      lastName: user.lastName,
      telephone: user.telephone,
    });

    const saveUser = await newUser.save();
    res.status(200).json(saveUser);
    eMail1(user.eMail);
  } catch (error) {
    res.status(500).send(`{messaje: ${error}}`);
  }
};

/**
 * It takes the email and password from the body of the request, checks if the email exists in the
 * database, if it does, it compares the password with the one in the database, if they match, it
 * updates the loading value in the database and returns the new loading value, if they don't match, it
 * returns the current loading value and an error message
 * @param req - The request object represents the HTTP request and has properties for the request query
 * string, parameters, body, HTTP headers, and so on.
 * @param res - The response object.
 * @returns The loading value is being returned.
 */
const routerPostUserLoading = async (req, res) => {
  try {
    const { eMail, password, loading } = req.body;
    const users = await Users.findOne({ eMail });
    let equal;

    users
      ? (equal = bcryptjs.compareSync(password, users.password))
      : res.status(201).json(`${eMail} Not found`);

    if (equal) {
      await userSchema.updateOne({ _id: users._id }, { $set: { loading } });
      return res.status(200).json(loading);
    } else {
      return res
        .status(201)
        .json({ loading: `${users.loading}`, password: "Incorrect password" });
    }
  } catch (error) {
    res.status(500).send(`{messaje: ${error}}`);
  }
};

/**
 * This function is used to update the loading status of the user
 * @param req - The request object.
 * @param res - The response object.
 * @returns The user is being returned.
 */
const routerPostUserSignoff = async (req, res) => {
  try {
    const { _id, loading } = req.body;
    const users = await Users.findOne({ _id });

    if (users.loading === "valid") {
      let Signoff = await userSchema.updateOne(
        { _id: _id },
        { $set: { loading } }
      );
      return res.status(200).json(Signoff);
    } else {
      return res
        .status(201)
        .json("The transfer cannot be closed. You are not connected.");
    }
  } catch (error) {
    res.status(500).send(`{messaje: ${error}}`);
  }
};

/**
 * It gets all the users from the database
 * @param req - The request object represents the HTTP request and has properties for the request query
 * string, parameters, body, HTTP headers, and so on.
 * @param res - The response object.
 * @returns It is being returned the users that are in the database.
 */
const routerGetUsers = async (req, res) => {
  try {
    const { dni } = req.query;
    const { eMail, password } = req.body;
    const user = await Users.findOne({ eMail });
    const users = await userSchema
      .find()
      .populate("review", { description: 1, rate: 1, car: 1 })
      .populate("reviewAccesories", {
        description: 1,
        rate: 1,
        accessories: 1,
      })
      .populate("billing", {
        invoice_number: 1,
        full_value: 1,
        discount: 1,
        car: 1,
        accessories: 1,
      });
    if (dni) {
      let userDni = users.filter((user) => user.dni === Number(dni));
      userDni.length
        ? res.status(200).json(userDni)
        : res.status(201).json("Not found");
    } else {
      res.status(200).json(users);
    }
  } catch (error) {
    res.status(500).json(`Error ${error}`);
  }
};

/**
 * It finds a user by id, populates the review, reviewAccesories and billing fields, and returns the
 * user if the user is valid
 * @param req - The request object represents the HTTP request and has properties for the request query
 * string, parameters, body, HTTP headers, and so on.
 * @param res - The response object.
 * @returns The user information is being returned.
 */
const routerByidUser = async (req, res) => {
  try {
    const { id } = req.params;
    let user = await userSchema
      .findById(id)
      .populate("review", { description: 1, rate: 1, car: 1 })
      .populate("reviewAccesories", {
        description: 1,
        rate: 1,
        accessories: 1,
      })
      .populate("billing", {
        invoice_number: 1,
        full_value: 1,
        discount: 1,
        car: 1,
        accessories: 1,
      });

    return res.status(200).json(user);
  } catch (error) {
    res.status(500).json(`Error ${error}`);
  }
};

/**
 * It updates the user's information in the database
 * @param req - The request object represents the HTTP request and has properties for the request query
 * string, parameters, body, HTTP headers, and so on.
 * @param res - The response object.
 * @returns The userSchema is being returned.
 */
const routerPutUser = async (req, res) => {
  const { id } = req.params;

  const {
    name,
    lastName,
    kindOfPerson,
    eMail,
    location,
    telephone,
    active,
    roll,
  } = req.body;

  userSchema
    .updateOne(
      { _id: id },
      {
        $set: {
          name,
          lastName,
          kindOfPerson,
          eMail,
          location,
          telephone,
          active,
          roll,
        },
      }
    )
    .populate("review", { description: 1, rate: 1 })
    .then((data) => res.json(data))
    .catch((error) => res.status(500).json({ message: `${error} ` }));
};

/**
 * This function is used to delete a user from the database
 * @param req - The request object. This object represents the HTTP request and has properties for the
 * request query string, parameters, body, HTTP headers, and so on.
 * @param res - The response object.
 */
const routerDeleteUser = async (req, res) => {
  const { id } = req.params;
  const { active } = req.body;

  let user = await Users.findById(id);

  userSchema
    .updateOne({ _id: id }, { $set: { active } })
    .populate("review", { description: 1, rate: 1 })
    .then((data) => res.json(data))
    .catch((error) => res.status(500).json({ message: `${error} ` }));
};

/**
 * This function is used to update the roll of a user
 * @param req - The request object.
 * @param res - The response object.
 */
const routerPutRollUsers = async (req, res) => {
  const { id } = req.params;
  const { roll } = req.body;

  userSchema
    .updateOne(
      { _id: id },
      {
        $set: {
          roll,
        },
      }
    )
    .then((data) => res.json(data))
    .catch((error) => res.status(500).json({ message: `${error} ` }));
};

module.exports = {
  routerGetFavorite,
  routerPostUser,
  routerPostUserLoading,
  routerPostUserSignoff,
  routerGetUsers,
  routerByidUser,
  routerPutUser,
  routerDeleteUser,
  routerPutRollUsers,
};
