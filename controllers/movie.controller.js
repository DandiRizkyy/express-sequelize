const db = require("../models");
const Movie = db.movies;

// CREATE: untuk enambahkan data kedalam tabel 
exports.create = (req, res) => {
  // validate request
  if (!req.body.title) {
    return res.status(400).send({
      message: "Title can not be empty",
    });
  }

  // daya yang didapatkan dari inputan oleh pengguna
  const movie = {
    title: req.body.title,
    description: req.body.description ? req.body.description : ""
  };

  // proses menyimpan kedalam database
  Movie.create(movie)
    .then((data) => {
      res.json({
        message: "Movie created successfully.",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Some error occurred while creating the Movie.",
        data: null,
      });
    });
};

// READ: menampilkan atau mengambil semua data sesuai model dari database
exports.findAll = (req, res) => {
  Movie.findAll()
    .then((movies) => {
      res.json({
        message: "Movies retrieved successfully.",
        data: movies,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Some error occurred while retrieving movies.",
        data: null,
      });
    });
};

// UPDATE: Merubah data sesuai dengan id yang dikirimkan sebagai params 
exports.update = (req, res) => {
  const id = req.params.id;
  Movie.update(req.body, {
    where: { id },
  })
    .then((num) => {
      if (num == 1) {
        res.json({
          message: "Movie updated successfully.",
          data: req.body,
        });
      } else {
        res.json({
          message: `Cannot update movie with id=${id}. Maybe movie was not found or req.body is empty!`,
          data: req.body,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Some error occurred while updating the movie.",
        data: null,
      });
    });
};

// DELETE: Menghapus data sesuai id yang dikirimkan
exports.delete = (req, res) => {
  const id = req.params.id;
  Movie.destroy({
    where: { id },
  })
    .then((num) => {
      if (num == 1) {
        res.json({
          message: "Movie deleted successfully.",
          data: req.body,
        });
      } else {
        res.json({
          message: `Cannot delete movie with id=${id}. Maybe movie was not found!`,
          data: req.body,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Some error occurred while deleting the movie.",
        data: null,
      });
    });
};

// BONUS ===> Mengambil data sesuai id yang dikirimkan
exports.findOne = (req, res) => {
  Movie.findByPk(req.params.id)
    .then((movie) => {
      res.json({
        message: "Movie retrieved successfully.",
        data: movie,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Some error occurred while retrieving movie.",
        data: null,
      });
    });
};
