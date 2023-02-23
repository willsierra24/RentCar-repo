const { check } = require('express-validator');
const { validateResult } = require('../Helpers/ValidateHelper.js');


const validateCreate = [
    check('licensePlate')
        .exists()
        .not()
        .withMessage("You must enter a licensePlate")
        .isLength({min: 3}, {max: 10})
        .isString(),
    check('brand')
        .exists()
        .withMessage("You must enter a brand")
        .isLength({min: 1}, {max: 15})
        .not()
        .isString(),
    check('image')
        .isString(),
    check('status')
        .exists()
        .not()
        .withMessage("You must enter a status")
        .isString(),
    check('active')
        .exists()
        .withMessage("You must enter a active")
        .not()
        .isString(),
    check('price')
        .isLength({min: 1})
        .withMessage("You must enter a price")
        .isNumeric(),
    check('description')
        .exists()
        .withMessage("You must enter a description")
        .not()
        .isLength({min: 30}, {max:500})
        .isString(),
    check('fuelConsumption')
        .exists()
        .withMessage("You must enter a fuelConsumption")
        .not()
        .isLength({min: 3}, {max: 15})
        .isString(),
    check('location')
        .exists()
        .withMessage("You must enter a location")
        .not()
        .isLength({min: 10}, {max: 200})
        .isString(),
    check('colour')
        .exists()
        .withMessage("You must enter a colour")
        .not()
        .isLength({min: 3}, {max: 18})
        .isString(),
    check('discount')
        .exists()
        .withMessage("You must enter a discount")
        .not()
        .isLength({min: 1}, {max: 3})
        .isNumeric(),
    check('doors')
        .exists()
        .withMessage("You must enter a doors")
        .not()
        .isNumeric(),
    check('line')
        .exists()
        .withMessage("You must enter a line")
        .not()
        .isLength({min: 2}, {max:50})
        .isString(),
    check('category')
        .exists()
        .withMessage("You must enter a category")
        .not()
        .isLength({min: 3}, {max:15})
        .isString(),
    check('fuelType')
        .exists()
        .withMessage("You must enter a fuelType")
        .not()
        .isString(),
    check('typeOfBox')
        .exists()
        .withMessage("You must enter a typeOfBox")
        .not()
        .isString(),
    (req, res, next) => {
        validateResult(req, res, next)
        }
]


module.exports = { validateCreate }