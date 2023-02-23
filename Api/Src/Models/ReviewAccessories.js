const mongoose = require("mongoose");
const reviewAccessoriesSchema = mongoose.Schema({
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
  accessories: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Accessories",
    },
  ],

  active: {
    type: String,
    enum: ["valid", "invalid"],
    default: "valid",
  },
});

module.exports = mongoose.model("ReviewAccessories", reviewAccessoriesSchema);
