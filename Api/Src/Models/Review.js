const mongoose = require("mongoose");
const reviewSchema = mongoose.Schema({
  description: {
    type: String,
    minLength: 10,
    maxLength: 500,
  },
  rate: {
    type: Number,
    min: 0,
    max: 5,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "Users",
  },
  car: {
    type: mongoose.Types.ObjectId,
    ref: "Cars",
  },
  active: {
    type: String,
    enum: ["valid", "invalid"],
    default: "valid",
  },
});

module.exports = mongoose.model("Review", reviewSchema);
