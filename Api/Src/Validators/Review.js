const { check } = require('express-validator');
const { validateResult } = require('../Helpers/ValidateHelper.js');


const validateCreate = [
    check('description')
        .exists()
        .not()
        .withMessage("You must enter a description")
        .isLength({min: 10}, {max: 500})
        .isString(),
    check('rate')
        .exists()
        .withMessage("You must enter a rate")
        .isNumeric({min: 0}, {max: 5})
        .not()
        .isNumeric(),
    check('user')
        .exists()
        .withMessage("You must enter a user")
        .not(),
    check('car')
        .exists()
        .not()
        .withMessage("You must enter a car"),
    check('active')
        .exists()
        .not()
        .withMessage("You must enter a active")
        .isString(),
        (req, res, next) => {
            validateResult(req, res, next)
        }
]


module.exports = { validateCreate }