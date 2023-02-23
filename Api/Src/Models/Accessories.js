const mongoose = require("mongoose");

const accessoriesSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minLength: 3,
    maxLength: 50,
  },
  price: {
    type: Number,
    required: true,
    minLength: 1,
  },
  description: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 300,
  },
  image: {
    type: String,
    required: true,
    default:
      "https://actionaudiostore.com/images/accessories/car-accessories-png-5.png",
  },
  status: {
    type: String,
    enum: ["valid", "invalid"],
    default: "valid",
  },
  discount: {
    type: Number,
    default: 0,
    minLength: 1,
    maxLength: 3,
  },
  billing: {
    type: Array(mongoose.Types.ObjectId),
    ref: "Billings",
  },

  reviewAccesories: [
    {
      type: mongoose.Types.ObjectId,
      ref: "ReviewAccessories",
    },
  ],

  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
});

module.exports = mongoose.model("Accessories", accessoriesSchema);
