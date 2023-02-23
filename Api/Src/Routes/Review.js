const express = require("express");
const {
  routerPostReview,
  routerGetReview,
  routerGetByidReview,
  routerPutReview,
  routerDeleteReview,
} = require("../Controllers/ReviewControllers");
const router = express.Router();

/* This is a post request that is going to create a new review. */
router.post("/", async (req, res) => {
  routerPostReview(req, res);
});

/* This is a get request that is going to get all the reviews. */
router.get("/", async (req, res) => {
  routerGetReview(req, res);
});

/* This is a get request that is going to get a review by id. */
router.get("/:id", (req, res) => {
  routerGetByidReview(req, res);
});

/* This is a put request that is going to update a review by id. */
router.put("/:id", (req, res) => {
  routerPutReview(req, res);
});

/* This is a delete request that is going to delete a review by id. */
router.delete("/:id", (req, res) => {
  routerDeleteReview(req, res);
});

module.exports = router;
