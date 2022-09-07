import { Router } from "express";
import { reviewsController } from "../controllers/reviews.controller.js";

const reviewRouter = Router();

reviewRouter.get('/reviews', reviewsController.getReview)
reviewRouter.get('/review/book/:id', reviewsController.getReviewOfBook)

reviewRouter.post('/reviews/book', reviewsController.addReviewToBook)

reviewRouter.delete('/reviews', reviewsController.deleteReview)

export {reviewRouter}