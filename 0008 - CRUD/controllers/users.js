const { nanoid } = require("nanoid");

let users = [];

module.exports = {
  index: (req, res) => {
    res.render("user/users.ejs", { title: "Get data", users });
  },
  show: (req, res) => {
    const { id } = req.params;
    const user = users.filter((user) => user.id === id)[0];
    res.render("user/show.ejs", { id, user });
  },
  create: (req, res) => {
    res.render("user/create.ejs");
  },
  store: (req, res) => {
    req.body.id = nanoid();
    users.push(req.body);
    res.redirect("/users");
  },
  update: (req, res) => {
    if (users.length > 0) {
      const time = new Date().toString();
      const { id } = req.params;
      const { nama, email } = req.body;

      users.forEach((el) => {
        if (parseInt(el.id, 10) === parseInt(id, 10)) {
          el.id = id;
          el.nama = nama;
          el.email = email;
        }
      });

      res.json({
        status: true,
        data: users,
        message: `Data dengan ID : (${req.params.id}) berhasil diedit`,
        method: req.method,
        time: time,
        url: req.url,
      });
    }
  },
  delete: (req, res) => {
    const time = new Date().toString();
    const { id } = req.params;

    users = users.filter((el) => parseInt(el.id, 10) !== parseInt(id, 10));

    res.json({
      status: true,
      data: users,
      message: `Data dengan ID : (${req.params.id}) berhasil dihapus`,
      method: req.method,
      time: time,
      url: req.url,
    });
  },
};
