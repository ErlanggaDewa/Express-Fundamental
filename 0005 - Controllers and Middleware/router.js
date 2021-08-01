const express = require("express");
const router = express.Router();

const users = require("./controllers/users");

// ! ini adalah middleware
router.use(function timeLog(req, res, next) {
  console.log("Time: ", new Date().toString());
  req.time = Date.now();
  next();
});

router.route("/").get(users.getData).post(users.postData);

router.route("/:id").put(users.updateData).delete(users.deleteData);

module.exports = router;
