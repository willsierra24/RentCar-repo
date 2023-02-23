const { check } = require("express-validator");
const { validateResult } = require("../Helpers/ValidateHelper.js");

const validateCreate = [
  check("name")
    .exists()
    .not()
    .withMessage("You must enter a name")
    .isLength({ min: 3 }, { max: 50 })
    .isString(),
  check("lastName")
    .exists()
    .withMessage("You must enter a lastName")
    .isLength({ min: 1 }, { max: 50 })
    .not()
    .isString(),
  check("dni")
    .exists()
    .not()
    .isLength({ min: 7 }, { max: 10 })
    .withMessage("You must enter a dni")
    .isNumeric(),

  check("eMail")
    .exists()
    .withMessage("You must enter a eMail")
    .not()
    .isString(),

  check("password")
    .exists()
    .withMessage("You must enter a password")
    .not()
    .isString(),

  check("telephone")
    .exists()
    .withMessage("You must enter a telephone")
    .not()
    .isString(),

  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = { validateCreate };
