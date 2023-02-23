const express = require("express");
const router = express.Router();
const {
  routerGetCars,
  routerPostCars,
  routerByidCars,
  routerPutCars,
  routerDeleteCars,
} = require("../Controllers/CarsController");

/* This is a post request that is being sent to the server. */
router.post("/", (req, res) => {
  routerPostCars(req, res);
});

/* This is a get request that is being sent to the server. */
router.get("/", (req, res) => {
  routerGetCars(req, res);
});

/* This is a get request that is being sent to the server. */
router.get("/:id", (req, res) => {
  routerByidCars(req, res);
});

/* This is a put request that is being sent to the server. */
router.put("/:id", (req, res) => {

  routerPutCars(req, res);
});
/* This is a delete request that is being sent to the server. */
router.delete("/:id", (req, res) => {
  routerDeleteCars(req, res);
});

module.exports = router;
