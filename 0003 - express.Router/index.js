const express = require("express");
const app = express();
const port = 3000;

app
  .route("/about")
  .get((req, res) => {
    res.send("get about me");
  })
  .post((req, res) => {
    res.send("post about me");
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
