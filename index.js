import express from "express";
import mongoose from "mongoose";
import { genreRouter } from "./routes/genres.route.js";
import { reviewRouter } from "./routes/review.route.js";
import { booksRouter } from "./routes/books.route.js";
import { authorsRouter } from "./routes/authors.route.js";

const port = 3060;

const dbUrl = "mongodb+srv://zelim:Ru95@cluster0.09gco.mongodb.net/bookss";
const app = express();
app.use(express.json());
app.use(genreRouter);
app.use(reviewRouter);
app.use(booksRouter);
app.use(authorsRouter);

const start = async () => {
  try {
    await mongoose.connect(dbUrl);
    console.log("Connected...");
    await app.listen(port, () => {
      console.log("Server has been started..");
    });
  } catch (error) {
    console.log(error.message);
  }
};

start();
