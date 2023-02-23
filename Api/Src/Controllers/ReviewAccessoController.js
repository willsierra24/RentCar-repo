const Users = require("../Models/Users");
const Accessories = require("../Models/Accessories");
const reviewAccessoriesSchema = require("../Models/ReviewAccessories");
const { validateCreate } = require("../Validators/ReviewAccessories.js");

/**
 * It creates a new review for an accessory, and then adds the review to the user and accessory
 * @param req - The request object represents the HTTP request and has properties for the request query
 * string, parameters, body, HTTP headers, and so on.
 * @param res - The response object.
 */
const routerPostRaccessorie = async (req, res) => {
  validateCreate;
  try {
    const review = reviewAccessoriesSchema(req.body);
    const user = await Users.findById(review.user);
    const accessories = await Accessories.findById(review.user);

    const newReview = new ReviewAccessories({
      description: review.description,
      rate: review.rate,
      user: user._id,
      accessories: accessories._id,
    });

    const saveReview = await newReview.save();
    user.review = user.review.concat(saveReview._id);
    await user.save();
    accessories.review = accessories.review.concat(saveReview._id);
    await accessories.save();
    res.status(200).json(saveReview);
  } catch (error) {
    res.status(500).send({ messaje: `${error}` });
  }
};
/**
 * It's a function that returns a promise that resolves to an array of objects
 * @param req - The request object represents the HTTP request and has properties for the request query
 * string, parameters, body, HTTP headers, and so on.
 * @param res - The response object.
 */

const routerGetRaccessorie = async (req, res) => {
  try {
    const review = await reviewAccessoriesSchema
      .find({})
      .populate("user", {
        name: 1,
        lastName: 1,
        eMail: 1,
        telephone: 1,
      })
      .populate("accessories", { name: 1, price: 1 });
    res.status(200).json(review);
  } catch (error) {
    res.status(500).send({ messaje: `${error}` });
  }
};

/**
 * It finds a reviewAccessoriesSchema by id and populates the user field with the name, lastName, eMail
 * and telephone fields
 * @param req - The request object represents the HTTP request and has properties for the request query
 * string, parameters, body, HTTP headers, and so on.
 * @param res - The response object.
 */
const routerGetByidRaccessorie = (req, res) => {
  const { id } = req.params;
  reviewAccessoriesSchema
    .findById(id)
    .populate("user", {
      name: 1,
      lastName: 1,
      eMail: 1,
      telephone: 1,
    })
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).send({ messaje: `${error}` }));
};

/**
 * This function updates the description of a review of an accessory
 * @param req - The request object.
 * @param res - The response object.
 */
const routerPutRaccessorie = (req, res) => {
  const { id } = req.params;
  const { description } = req.body;
  reviewAccessoriesSchema
    .updateOne({ _id: id }, { $set: { description } })
    .populate("user", {
      name: 1,
      lastName: 1,
      eMail: 1,
      telephone: 1,
    })
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).send({ messaje: `${error}` }));
};

/**
 * This function is used to delete a review of an accessory
 * @param req - The request object represents the HTTP request and has properties for the request query
 * string, parameters, body, HTTP headers, and so on.
 * @param res - The response object.
 */
const routerDeleteRaccessorie = (req, res) => {
  const { id } = req.params;
  const { active } = req.body;
  reviewAccessoriesSchema
    .updateOne({ _id: id }, { $set: { active } })
    .populate("user", {
      name: 1,
      lastName: 1,
      eMail: 1,
      telephone: 1,
    })
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).send({ messaje: `${error}` }));
};

module.exports = {
  routerPostRaccessorie,
  routerGetRaccessorie,
  routerGetByidRaccessorie,
  routerPutRaccessorie,
  routerDeleteRaccessorie,
};
