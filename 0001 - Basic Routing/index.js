const express = require("express");
const app = express();
const port = 3000;

// !----------------
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/:id", (req, res) => {
  res.send(req.params);
});

app.post("/", (req, res) => {
  res.send("POST");
});

app.put("/", (req, res) => {
  res.send("PUT");
});

app.delete("/", (req, res) => {
  res.send("DELETE");
});
// !----------------

// !----------------

const cb0 = function (req, res, next) {
  console.log("CB0");
  next();
};

const cb1 = function (req, res, next) {
  console.log("CB1");
  next();
};

const cb2 = function (req, res) {
  res.send("Hello from C!");
};

app.get("/example/c", [cb0, cb1, cb2]);

// !----------------

const cb3 = function (req, res, next) {
  console.log("cb3");
  next();
};

const cb4 = function (req, res, next) {
  console.log("cb4");
  next();
};

app.get(
  "/example/d",
  [cb3, cb4],
  function (req, res, next) {
    console.log("the response will be sent by the next function ...");
    next();
  },
  function (req, res) {
    res.send("Hello from D!");
  }
);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
