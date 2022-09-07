import { Router } from "express";
import { genresController } from "../controllers/genres.controller.js";

const genreRouter = Router();

genreRouter.get("/genres", genresController.getGenres);
genreRouter.post("/genres", genresController.addGenres);
genreRouter.delete("/genres/:id", genresController.deleteGenres);

export {genreRouter}
