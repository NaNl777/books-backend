import { Book } from "../models/Book.model.js";

const booksController = {
  addBooks: async (req, res) => {
    try {
      const addBooks = await Book.create({
        name: req.body.name,
        author: req.body.author,
        genreId: req.body.genreId,
      });
      return res.json(addBooks);
    } catch (error) {
      console.log(error.message);
    }
  },
  deleteBooks: async (req, res) => {
    try {
      const deletedBooks = await Book.findByIdAndDelete(req.params.id);
      return res.json(deletedBooks);
    } catch (error) {
      console.log(error.message);
    }
  },
  updateBooks: async (req, res) => {
    try {
      const updateBooks = await Book.findByIdAndUpdate(req.params.id, req.body);
      return res.json(updateBooks);
    } catch (error) {
      console.log(error.message);
    }
  },

  getBooks: async (req, res) => {
    try {
      const getBook = await Book.find({}).populate({path: "author",  select: "author_name _id description",}).populate({path: "genreId", select: "genre_name _id"});
      // const getBook = await Book.find({}).populate("author")
      return res.json(getBook);
    } catch (error) {
      res.json(error.message);
    }
  },
  getBookById: async (req, res) => {
    try {
      const getBookById = await Book.findById(req.params.id).populate({ path: "author", select: "author_name -_id" }).populate({ path: "genre", select: "genre_name -_id" });
      res.json(getBookById);
    } catch (error) {
      console.log(error.message);
    }
  },
  getBookByGenre: async (req, res) => {
    try {
      const getBookByGenre = await Book.find({ genre: req.params.id }).populate({ path: "author", select: "author_name -_id" }).populate({ path: "genre", select: "genre_name -_id" });
      res.json(getBookByGenre);
    } catch (error) {
      console.log(error.message)
    }
  },
};

export { booksController };
