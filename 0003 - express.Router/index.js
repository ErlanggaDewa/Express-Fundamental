const express = require("express");
const router = require("./router");

const app = express();
const port = 3000;

app.use("/users", router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
