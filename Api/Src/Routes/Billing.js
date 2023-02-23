const express = require("express");
const {
  routerPostBilling,
  routerGetBilling,
  routerGetByidBilling,
  routerPutBilling,
  routerDeleteBilling,
} = require("../Controllers/BillingController");
const router = express.Router();

/* This is a post request that is looking for the billing information. */
router.post("/", (req, res) => {
  routerPostBilling(req, res);
});

/* This is a get request that is looking for the billing information. */
router.get("/", (req, res) => {
  routerGetBilling(req, res);
});

/* This is a get request that is looking for the billing information. */
router.get("/:id", async (req, res) => {
  routerGetByidBilling(req, res);
});

/* This is a put request that is looking for the billing information. */
router.put("/:id", async (req, res) => {
  routerPutBilling(req, res);
});

/* This is a delete request that is looking for the billing information. */
router.delete("/:id", (req, res) => {
  routerDeleteBilling(req, res);
});

module.exports = router;
