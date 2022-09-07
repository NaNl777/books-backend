import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    ref: "author",
    type: mongoose.Schema.Types.ObjectId,
  },
  genreId: {
    ref: "genre",
    type: mongoose.Schema.Types.ObjectId,
  },
});

const Book = mongoose.model("book", bookSchema);

export { Book };
