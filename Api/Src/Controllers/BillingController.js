const Cars = require("../Models/Cars");
const Users = require("../Models/Users");
const Billing = require("../Models/Billing");
const billingSchema = require("../Models/Billing");
const Accessories = require("../Models/Accessories");
const { validateCreate } = require("../Validators/Billing.js");

/**
 * It creates a new billing, and then it saves the billing, the user, the car and the accessories
 * @param req - The request object.
 * @param res - The response object.
 */
const routerPostBilling = async (req, res) => {
  validateCreate;

  const billing = await Billing.find({});
  /* Getting the last invoice number and adding 1 to it. */
  let iNumber = 0;
  if (billing.length !== 0) {
    iNumber = Number(billing[billing.length - 1].invoice_number);
  }

  if (iNumber < 1) iNumber = "1000";
  else {
    ++iNumber;
  }

  try {
    const billing = billingSchema(req.body);
    const user = await Users.findById(billing.user);
    const car = await Cars.findById(billing.car);

    const newBilling = await new Billing({
      car: car._id,
      user: user._id,
      deadline: billing.deadline,
      discount: billing.discount,
      rentalDate: billing.rentalDate,
      full_value: billing.full_value,
      accessories: billing.accessories,
      invoice_number: iNumber.toString(),
    });

    const saveBilling = await newBilling.save();
    user.billing = user.billing.concat(saveBilling._id);
    await user.save();
    car.billing = car.billing.concat(saveBilling._id);
    await car.save();
    billing.accessories?.forEach(async (element) => {
      let accessories = await Accessories.findById(element);
      accessories.billing = accessories.billing.concat(saveBilling._id);
      await accessories.save();
    });
    res.status(200).json(saveBilling);
  } catch (error) {
    res.status(500).send(`{messaje: ${error}}`);
  }
};

/**
 * It returns all the billing information from the database, if the invoice_number is provided, it
 * returns the billing information of the invoice_number provided
 * @param req - The request object represents the HTTP request and has properties for the request query
 * string, parameters, body, HTTP headers, and so on.
 * @param res - The response object.
 */
const routerGetBilling = async (req, res) => {
  const { invoice_number } = req.query;
  try {
    const billing = await Billing.find({})
      .populate("user", {
        name: 1,
        lastName: 1,
        eMail: 1,
        telephone: 1,
        dni: 1,
      })
      .populate("car", { licensePlate: 1, line: 1, price: 1 })
      .populate("accessories", { name: 1, price: 1 });

    if (invoice_number) {
      let billing_invoice_number = billing.filter(
        (billing) => billing.invoice_number === invoice_number
      );

      billing_invoice_number.length
        ? res.status(200).json(billing_invoice_number)
        : res.status(201).json("Not found");
    } else res.status(200).json(billing);
  } catch (error) {
    res.status(500).json(`Error ${error}`);
  }
};
/**
 * It gets a billing by id, populating the user, car and accessories fields
 * @param req - The request object represents the HTTP request and has properties for the request query
 * string, parameters, body, HTTP headers, and so on.
 * @param res - The response object.
 */

const routerGetByidBilling = async (req, res) => {
  const { id } = req.params;
  try {
    const billing = await Billing.findById(id)
      .populate("user", {
        name: 1,
        lastName: 1,
        eMail: 1,
        telephone: 1,
        dni: 1,
      })
      .populate("car", { licensePlate: 1, line: 1, price: 1 })
      .populate("accessories", { name: 1, price: 1 });

    billing ? res.status(200).json(billing) : res.status(201).json("Not found");
  } catch (error) {
    res.status(500).json(`Error ${error}`);
  }
};

/**
 * It updates a billing in the database
 * @param req - The request object.
 * @param res - The response object.
 */
const routerPutBilling = async (req, res) => {
  const { id } = req.params;
  const { full_value, discount, user, car, accessories } = req.body;
  try {
    const billing = await Billing.updateOne(
      { _id: id },
      {
        $set: {
          full_value,
          discount,
          user,
          car,
          accessories,
        },
      }
    )
      .populate("user", {
        name: 1,
        lastName: 1,
        eMail: 1,
        telephone: 1,
        dni: 1,
      })
      .populate("car", { licensePlate: 1, line: 1, price: 1 })
      .populate("accessories", { name: 1, price: 1 });

    billing
      ? res.status(200).json(billing)
      : res.status(201).json("Not update");
  } catch (error) {
    res.status(500).json(`Error ${error}`);
  }
};

/**
 * It updates the billingSchema with the id and active value
 * @param req - The request object.
 * @param res - The response object.
 */
const routerDeleteBilling = async (req, res) => {
  const { id } = req.params;
  const { active } = req.body;
  billingSchema
    .updateOne({ _id: id }, { $set: { active } })
    .populate("review", { description: 1, rate: 1 })
    .then((data) => res.json(data))
    .catch((error) => res.status(500).json({ message: `${error} ` }));
};

module.exports = {
  routerPostBilling,
  routerGetBilling,
  routerGetByidBilling,
  routerPutBilling,
  routerDeleteBilling,
};
