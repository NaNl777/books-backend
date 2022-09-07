import {Genre} from "../models/Genre.model.js";

const genresController = {
  getGenres: async (req, res) => {
    try {
      const data = await Genre.find({});
      return res.json(data);
    } catch (error) {
      console.log(error.message);
    }
  },

  addGenres: async (req, res) => {
    try {
      await Genre.create({
        genre_name: req.body.genre_name,
        description: req.body.description,
      });
       return res.json("Жанр успешно создан")
    } catch (error) {
        console.log(error.message)
    }
  },

  // addGenres: (req, res) => {
  //   Genre.create({
  //     genre_name: req.body.genre_name,
  //     description: req.body.description,
  //   }).then(() => {
  //     res.json("Жанр успешно создан");
  //   });
  // },

  deleteGenres: async (req, res) => {
    try {
      await Genre.findByIdAndRemove(req.params.id);
      return res.json("Жанр с таким id: " + req.params.id + " успешно удален.");
    } catch (error) {
      console.log(error.message);
    }
  },
};

export {genresController}