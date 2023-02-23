const reviewSchema = require("../Models/Review");
const Users = require("../Models/Users");
const Cars = require("../Models/Cars");
const Review = require("../Models/Review");
const { validateCreate } = require("../Validators/Review.js");
const { validateReview } = require("../Assistant/reviewAssistant");

/**
 * It creates a new review, saves it, and then adds the review to the user and car
 * @param req - The request object. This contains information about the HTTP request that raised the
 * event.
 * @param res - The response object.
 */
const routerPostReview = async (req, res) => {
  try {
    validateCreate;
    let boolean = await validateReview(req, res);
    if (boolean === true) {
      const review = reviewSchema(req.body);
      const user = await Users.findById(review.user);
      const car = await Cars.findById(review.car);

      const newReview = new Review({
        description: review.description,
        rate: review.rate,
        user: user._id,
        car: car._id,
      });

      const saveReview = await newReview.save();
      user.review = user.review.concat(saveReview._id);
      await user.save();
      car.review = car.review.concat(saveReview._id);
      await car.save();
      res.status(200).json(saveReview);
    } else {
      res
        .status(201)
        .json("Sorry, you can't make more comments about this vehicle.");
    }
  } catch (error) {
    res.status(500).send({ messaje: `${error}` });
  }
};

/**
 * It gets all the reviews from the database and populates the user and car fields with the data from
 * the user and car collections
 * @param req - The request object represents the HTTP request and has properties for the request query
 * string, parameters, body, HTTP headers, and so on.
 * @param res - The response object.
 */
const routerGetReview = async (req, res) => {
  try {
    const review = await Review.find({})
      .populate("user", {
        name: 1,
        lastName: 1,
        eMail: 1,
        telephone: 1,
        dni: 1,
      })
      .populate("car", { licensePlate: 1, line: 1 });
    res.status(200).json(review);
  } catch (error) {
    res.status(500).send({ messaje: `${error}` });
  }
};

/**
 * It finds a review by its id, and populates the user field with the name, lastName, eMail and
 * telephone fields of the user
 * @param req - The request object represents the HTTP request and has properties for the request query
 * string, parameters, body, HTTP headers, and so on.
 * @param res - The response object.
 */
const routerGetByidReview = async (req, res) => {
  const { id } = req.params;
  reviewSchema
    .findById(id)
    .populate("user", {
      name: 1,
      lastName: 1,
      eMail: 1,
      telephone: 1,
    })
    .then((data) => res.json(data))
    .catch((error) => res.status(500).send({ messaje: `${error}` }));
};

/**
 * This function updates the description of a review in the database
 * @param req - The request object.
 * @param res - The response object.
 */
const routerPutReview = async (req, res) => {
  const { id } = req.params;
  const { description } = req.body;
  reviewSchema
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
 * It updates the active field of the review with the id passed in the url, and returns the updated
 * review
 * @param req - The request object.
 * @param res - The response object.
 */
const routerDeleteReview = async (req, res) => {
  const { id } = req.params;
  const { active } = req.body;
  reviewSchema
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
  routerPostReview,
  routerGetReview,
  routerGetByidReview,
  routerPutReview,
  routerDeleteReview,
};
