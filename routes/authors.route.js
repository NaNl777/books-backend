import Router from "express";
import { authorsController } from "../controllers/authors.controller.js";

const authorsRouter = Router();

authorsRouter.get("/authors", authorsController.getAuthors);
authorsRouter.post("/authors", authorsController.addAuthors);

export {authorsRouter}