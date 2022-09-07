import { Review } from "../models/Review.model.js";

const reviewsController = {
   deleteReview: async(req, res) => {
    try {
     const deleteReview = await Review.findByIdAndDelete(req.params.id);
     return res.json(deleteReview)
   } catch (error) {
     console.log(error.message)     
   }
},
   addReviewToBook: async(req, res) => {
    try {
    const addReviewBook = await Review.create({
        text: req.body.text,
        review_author: req.body.review_author,
        book: req.body.book
    }) 
     return res.json(addReviewBook)
    } catch (error) {
      console.log(error.message)
    }
   },
   getReviewOfBook: async(req, res) => {
    try {
    const getReviewOfBook = await Review.find({book: req.params.book})
    return res.json(getReviewOfBook)
   } catch (error) {
    console.log(error.message)
   }
},
  getReview: async(req, res) => {
    try {
        const getReview = await Review.find({}).populate({path: "book", select: "name -_id"})
        return res.json(getReview)
    } catch (error) {
        console.log(error.message)
    }
  }
}

export {reviewsController}

