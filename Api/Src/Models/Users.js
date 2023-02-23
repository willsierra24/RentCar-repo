const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 50,
  },
  image: {
    type: String,
    default: "http://cdn.onlinewebfonts.com/svg/img_141364.png",
  },
  lastName: {
    type: String,
    minLength: 3,
    maxLength: 50,
  },
  dni: {
    type: Number,
    unique: true,
    minLength: 7,
    maxLength: 10,
  },
  kindOfPerson: {
    type: String,
    minLength: 5,
    maxLength: 15,
  },
  eMail: {
    type: String,
    required: true,
    unique: true,
  },
  location: {
    type: String,
    ref: "Location",
  },
  telephone: {
    type: String,
    unique: true,
    minLength: 9,
  },
  roll: {
    type: String,
    enum: ["admin", "user", "superAdmin"],
    default: "user",
  },
  active: {
    type: String,
    enum: ["valid", "invalid"],
    default: "valid",
  },
  billing: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Billings",
    },
  ],
  reviewAccesories: [
    {
      type: mongoose.Types.ObjectId,
      ref: "ReviewAccessories",
    },
  ],

  review: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Review",
    },
  ],
  password: {
    type: String,
    required: true,
  },

  favorites: {
    type: Array,
  },

  loading: {
    type: String,
    enum: ["valid", "invalid"],
    default: "invalid",
  },
});

module.exports = mongoose.model("Users", userSchema);
