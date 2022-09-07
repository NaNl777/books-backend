import mongoose from "mongoose";

const authorSchema = mongoose.Schema({
  author_name: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
});

const Author = mongoose.model('author', authorSchema);

export { Author };
