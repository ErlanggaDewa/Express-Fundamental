const express = require("express");
const router = express.Router();

router.use(function timeLog(req, res, next) {
  console.log("Time: ", Date.now());
  next();
});

router
  .route("/")
  .get((req, res) => {
    res.send("get users");
  })
  .post((req, res) => {
    res.send("post users");
  });

router
  .route("/:id")
  .put((req, res) => {
    res.send(`edit ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`delete ${req.params.id}`);
  });

router
  .route("/about/:id")
  .get((req, res) => {
    res.send(`get ${req.params.id}`);
  })
  .delete((req, res) => {
    res.delete(`delete ${req.params.id}`);
  });

module.exports = router;
