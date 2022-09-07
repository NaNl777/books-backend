import { Router } from "express";
import { booksController } from "../controllers/books.controller.js";


const booksRouter = Router();

booksRouter.get("/books", booksController.getBooks);
booksRouter.get("/books/:id", booksController.getBookById);
booksRouter.get("/books/genre/:id", booksController.getBookByGenre);

booksRouter.delete("/books/:id", booksController.deleteBooks);
booksRouter.post("/books", booksController.addBooks);
booksRouter.patch("/books/:id", booksController.updateBooks);

export {booksRouter}
