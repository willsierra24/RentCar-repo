const Users = require("../Models/Users");
const Cars = require("../Models/Cars");
const reviewSchema = require("../Models/Review");

const validateReview = async (req, res) => {
  const review = reviewSchema(req.body);
  const user = await Users.findById(review.user);
  const car = await Cars.findById(review.car);
  if (user.review.length !== 0) {
    let reviewUser = user.review;
    let reviewDB = reviewUser[user.review.length - 1];

    const reviewOn = await reviewSchema.findById(reviewDB);
    if (JSON.stringify(car._id) === JSON.stringify(reviewOn.car)) return false;
    else return true;
  } else return true;
};

module.exports = { validateReview };
