const express = require("express");
const router = express.Router();

const users = require("./controllers/users");

// ! ini adalah middleware
router.use(function timeLog(req, res, next) {
  console.log("Time: ", new Date().toString());
  req.time = Date.now();
  next();
});

router.route("/").get(users.index).post(users.store);
router.route("/register").get(users.create);
router.route("/:id").get(users.show).put(users.update).delete(users.delete);

module.exports = router;
