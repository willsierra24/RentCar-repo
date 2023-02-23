const mongoose = require("mongoose");
const billingSchema = mongoose.Schema({
  invoice_number: {
    type: String,
    unique: true,
    required: true,
  },

  full_value: {
    type: Number,
    minLength: 0,
    required: true,
  },

  user: {
    type: mongoose.Types.ObjectId,
    ref: "Users",
  },

  car: {
    type: mongoose.Types.ObjectId,
    ref: "Cars",
  },

  accessories: {
    type: Array(mongoose.Types.ObjectId),
    ref: "Accessories",
  },

  discount: {
    type: Number,
    default: 0,
    minLength: 1,
    maxLength: 3,
  },

  active: {
    type: String,
    enum: ["valid", "invalid"],
    default: "valid",
  },

  payment_status: {
    type: String,
    enum: ["approved", "disapproved"],
    default: "disapproved",
  },

  deadline: {
    type: String,
    required: true,
  },

  rentalDate: {
    type: String,
    required: true,
  },

  qualified: {
    type: String,
    enum: ["valid", "invalid"],
    default: "invalid",
  },
});

module.exports = mongoose.model("Billings", billingSchema);
