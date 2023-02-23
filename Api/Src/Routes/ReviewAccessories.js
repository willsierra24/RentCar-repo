const express = require("express");
const router = express.Router();
const {
  routerPostRaccessorie,
  routerGetRaccessorie,
  routerGetByidRaccessorie,
  routerPutRaccessorie,
  routerDeleteRaccessorie,
} = require("../Controllers/ReviewAccessoController");

/* This is a post request that is going to create a new review. */
router.post("/", async (req, res) => {
  routerPostRaccessorie(req, res);
});

/* This is a get request that is going to get all the reviews. */
router.get("/", async (req, res) => {
  routerGetRaccessorie(req, res);
});

/* This is a get request that is going to get a review by id. */
router.get("/:id", (req, res) => {
  routerGetByidRaccessorie(req, res);
});

/* This is a put request that is going to update a review by id. */
router.put("/:id", (req, res) => {
  routerPutRaccessorie(req, res);
});

/* This is a delete request that is going to delete a review by id. */
router.delete("/:id", (req, res) => {
  routerDeleteRaccessorie(req, res);
});

module.exports = router;
