import mongoose from "mongoose";

const genreSchema = mongoose.Schema({
  genre_name: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
});

const Genre = mongoose.model("genre", genreSchema)

export {Genre}