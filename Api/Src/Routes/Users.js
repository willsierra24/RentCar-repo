const express = require("express");
const router = express.Router();
const {
  routerGetFavorite,
  routerPostUser,
  routerPostUserLoading,
  routerPostUserSignoff,
  routerGetUsers,
  routerByidUser,
  routerPutUser,
  routerDeleteUser,
  routerPutRollUsers,
} = require("../Controllers/UsersController");

/* This is a route that allows you to get the favorite of a user. */
router.get("/favorite", (req, res) => {
  routerGetFavorite(req, res);
});

/* This is a route that allows you to create a user. */
router.post("/", (req, res) => {
  routerPostUser(req, res);
});

/* This is a login route, it is looking for the user in the database and comparing the password with
the one that is in the database. */
router.post("/loading", (req, res) => {
  routerPostUserLoading(req, res);
});

/* This is a route that allows you to signoff a user. */
router.post("/signoff", (req, res) => {
  routerPostUserSignoff;
});

/* This is a route that allows you to get all the users. */
router.get("/", (req, res) => {
  routerGetUsers(req, res);
});

// get a user
router.get("/:id", (req, res) => {
  routerByidUser(req, res);
});

// update a user
router.put("/:id", async (req, res) => {
  routerPutUser(req, res);
});

// update a user
router.delete("/:id", async (req, res) => {
  routerDeleteUser(req, res);
});

/* This is a route that allows you to change the roll of a user. */
router.post("/roll/:id", async (req, res) => {
  routerPutRollUsers(req, res);
});

module.exports = router;
