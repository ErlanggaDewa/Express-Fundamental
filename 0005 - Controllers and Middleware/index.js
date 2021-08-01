const express = require("express");
const router = require("./router");

const app = express();
const port = 3000;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use("/users", router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
