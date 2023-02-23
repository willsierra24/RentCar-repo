const carSchema = require("../Models/Cars");
const Users = require("../Models/Users");
const { validateCreate } = require("../Validators/Cars.js");

/**
 * It gets all the cars from the database and returns them in the response
 * @param req - The request object represents the HTTP request and has properties for the request query
 * string, parameters, body, HTTP headers, and so on.
 * @param res - The response object.
 */
const routerGetCars = async (req, res) => {
  const { line } = req.query;
  const cars = await carSchema
    .find()
    .populate("review", { description: 1, rate: 1, user: 1 })
    .populate("billing", {
      invoice_number: 1,
      full_value: 1,
      discount: 1,
      user: 1,
      accessories: 1,
    });
  try {
    if (line) {
      let carsLine = cars.filter((car) =>
        car.line.toLowerCase().includes(line.toLowerCase())
      );
      carsLine.length
        ? res.status(200).json(carsLine)
        : res.status(201).json("Not found");
    } else {
      res.status(200).json(cars);
    }
  } catch (error) {
    res.send(`Error ${error}`);
  }
};

/**
 * It takes the request body, validates it, creates a new car object, checks if the user is an admin or
 * superAdmin, and if so, saves the car object to the database
 * @param req - The request object. This object represents the HTTP request and has properties for the
 * request query string, parameters, body, HTTP headers, and so on.
 * @param res - The response object.
 * @returns the carSchema.
 */
const routerPostCars = async (req, res) => {
  validateCreate;
  const car = carSchema(req.body);

  car
    .save()
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json({ message: `${error}` }));

};

/**
 * It finds a car by its id and populates the review field with the description and rate fields
 * @param req - The request object.
 * @param res - The response object.
 */
const routerByidCars = (req, res) => {
  const { id } = req.params;
  carSchema
    .findById(id)
    .populate("review", { description: 1, rate: 1 })
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json({ message: `${error}` }));
};
/**
 * It gets the email from the body of the request, then it finds the user in the database, then it gets
 * the id from the params, then it gets the rest of the data from the body of the request, then it
 * checks if the user exists and if the user is valid, then it checks if the user is an admin or a
 * superAdmin, then it updates the car in the database, then it populates the review, then it returns
 * the data or an error
 * @param req - The request object.
 * @param res - The response object.
 * @returns the updated car information.
 */

const routerPutCars = async (req, res) => {
  const { id } = req.params

  const {
    brand,
    price,
    description,
    fuelConsumption,
    location,
    colour,
    discount,
    doors,
    line,
    category,
    fuelType,
    typeOfBox,
    licensePlate,
    status,
    active
  } = req.body;

  carSchema
    .updateOne(
      { _id: id },
      {
        $set: {
          brand,
          price,
          description,
          fuelConsumption,
          location,
          colour,
          discount,
          doors,
          line,
          category,
          fuelType,
          typeOfBox,
          licensePlate,
          status,
          active
        },
      }
    )
    .populate("review", { description: 1, rate: 1 })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

/**
 * It takes the id of a car and the email of a user and if the user is a superAdmin and the user's
 * loading is valid, it will update the car's active status to the value of the active key in the
 * request body
 * @param req - The request object.
 * @param res - The response object.
 * @returns the carSchema.updateOne method.
 */
const routerDeleteCars = async (req, res) => {
  const { active } = req.body;
  const { id } = req.params;

  carSchema
    .updateOne({ _id: id }, { $set: { active } })
    .populate("review", { description: 1, rate: 1 })
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json({ message: `${error} ` }));
};
module.exports = {
  routerGetCars,
  routerPostCars,
  routerByidCars,
  routerPutCars,
  routerDeleteCars,
};
