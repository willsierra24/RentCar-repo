const express = require("express");
const router = express.Router();
const {
  routerPostAccessories,
  routerGetAccessories,
  routerGetByidAccessories,
  routerPutAccessories,
  routerDeleteAccessories,
} = require("../Controllers/AccessoriesController");

/* This is a post request that is saving the data to the database. */
router.post("/", async (req, res) => {
  routerPostAccessories(req, res);
});

/* This is a get request that is getting the data from the database. */
router.get("/", async (req, res) => {
  routerGetAccessories(req, res);
});

/* This is a get request that is getting the data from the database. */
router.get("/:id", (req, res) => {
  routerGetByidAccessories(req, res);
});

/* This is a put request that is updating the data from the database. */

router.put("/:", async (req, res) => {
  routerPutAccessories(req, res);
});

router.delete("/:id", async (req, res) => {
  routerDeleteAccessories(req, res);
});

module.exports = router;
