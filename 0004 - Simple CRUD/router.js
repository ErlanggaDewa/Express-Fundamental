const express = require("express");
const router = express.Router();

router.use(function timeLog(req, res, next) {
  console.log("Time: ", Date.now());
  next();
});

const users = [
  {
    id: "1",
    nama: "Erlangga Dewa",
    email: "erlanggadewa@gmail.com",
  },
  {
    id: "2",
    nama: "carissa indah swastika",
    email: "carissaindah@gmail.com",
  },
];

router
  .route("/")
  .get((req, res) => {
    res.json(users);
  })
  .post((req, res) => {
    const user = req.body;
    users.push(user);
    res.json(users);
  });

router
  .route("/:id")
  .put((req, res) => {
    const { id } = req.params;
    const { nama, email } = req.body;

    users.forEach((el) => {
      if (parseInt(el.id, 10) === parseInt(id, 10)) {
        el.id = id;
        el.nama = nama;
        el.email = email;
      }
    });

    res.json(users);
  })
  .delete((req, res) => {
    const { id } = req.params;

    const data = users.filter((el) => parseInt(el.id, 10) !== parseInt(id, 10));

    res.json(data);
  });

module.exports = router;
