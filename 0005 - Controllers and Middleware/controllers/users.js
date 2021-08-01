let users = [
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

module.exports = {
  getData: (req, res) => {
    const time = new Date().toString();

    if (users.length > 0) {
      res.json({
        status: true,
        data: users,
        method: req.method,
        time: time,
        url: req.url,
      });
    } else {
      res.json({
        status: false,
        message: `Data masih kosong`,
        method: req.method,
        time: time,
        url: req.url,
      });
    }
  },
  postData: (req, res) => {
    if (users.length > 0) {
      const time = new Date().toString();
      const user = req.body;
      users.push(user);

      res.json({
        status: true,
        data: users,
        message: `Data dengan ID : (${user.id}) berhasil ditambahkan`,
        method: req.method,
        time: time,
        url: req.url,
      });
    }
  },
  updateData: (req, res) => {
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
  deleteData: (req, res) => {
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
