const { check } = require('express-validator');
const { validateResult } = require('../Helpers/ValidateHelper.js');


const validateCreate = [
    check('invoice_number')
        .exists()
        .not()
        .withMessage("You must enter a invoice_number")
        .isLength({min: 4})
        .isString(),
    check('full_value')
        .exists()
        .withMessage("You must enter a full_value")
        .isLength({min: 0})
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
    check('accessories')
        .exists()
        .withMessage("You must enter a accessories"),
    check('discount')
        .exists()
        .isLength({min: 1}, {max: 3})
        .withMessage('You must enter a discount')
        .isNumeric(),
    check('active')
        .exists()
        .withMessage('You must enter a active')
        .isString(),
        (req, res, next) => {
            validateResult(req, res, next)
        }
]


module.exports = { validateCreate }