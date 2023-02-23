const { check } = require('express-validator');
const { validateResult } = require('../Helpers/ValidateHelper.js');


const validateCreate = [
    check('name')
        .exists()
        .not()
        .withMessage("You must enter a name")
        .isLength({min: 3}, {max: 50})
        .isEmpty(),
    check('price')
        .exists()
        .withMessage("You must enter a price")
        .isLength({min: 1})
        .not()
        .isNumeric(),
    check('description')
        .exists()
        .withMessage("You must enter a description")
        .not()
        .isLength({min: 10}, {max:300})
        .isString(),
    check('image')
        .isString(),
    check('status')
        .exists()
        .not()
        .withMessage("You must enter a status")
        .isString(),
    check('discount')
        .isLength({min: 1}, {max: 3})
        .withMessage("You must enter a discount")
        .isNumeric(),
        (req, res, next) => {
            validateResult(req, res, next)
        }
]


module.exports = { validateCreate }