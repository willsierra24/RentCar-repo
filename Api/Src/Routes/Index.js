const express = require("express");
const router = express.Router();

/* This is importing the routes from the files that are in the same directory as this file. */
const carRoutes = require("./Cars");
const userRoutes = require("./Users");
const reviewRoutes = require("./Review");
const billingRoutes = require("./Billing");
const paymentRoutes = require("./Payment");
const accessoriesRoutes = require("./Accessories");
const reviewAccessoriesRoutes = require("./ReviewAccessories");

/* Telling the server to use the routes in the files that are imported. */
router.use("/cars", carRoutes);
router.use("/users", userRoutes);
router.use("/review", reviewRoutes);
router.use("/billing", billingRoutes);
router.use("/payment", paymentRoutes);
router.use("/accessories", accessoriesRoutes);
router.use("/reviewAccessories", reviewAccessoriesRoutes);

module.exports = router;
