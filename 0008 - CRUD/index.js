const express = require("express");
const router = require("./router");
const path = require("path");

const app = express();
const port = 3000;

app.use("/assets", express.static(path.join(__dirname, "public"))); // set public directory as static directory
app.set("view engine", "ejs"); // set view engine ejs

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use("/users", router);

app.get("/", (req, res) => {
  res.render("home.ejs", { title: "Home hasil render" });
});

app.get("/about", (req, res) => {
  res.render("about.ejs", { title: "About hasil render" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
