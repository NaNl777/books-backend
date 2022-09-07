import { Author } from "../models/Author.model.js";

const authorsController = {
  getAuthors: async (req, res) => {
    try {
      const getAuthors = await Author.find();
      return res.json(getAuthors);
    } catch (error) {
      res.json(error.message);
    }
  },

  addAuthors: async (req, res) => {
    try {
      const addAuthors = await Author.create({
        author_name: req.body.author,
        description: req.body.description,
      });
      return res.json(addAuthors);
    } catch (error) {
      res.json(error.message);
    }
  },
};

export { authorsController };
