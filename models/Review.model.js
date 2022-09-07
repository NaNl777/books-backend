import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
    text: {
        type: String,
        required: true
    },

    review_author: {
        type: String,
        required: true
    },
    book: {
       ref: "book",
       type: mongoose.Schema.Types.ObjectId
    }
})

const Review = mongoose.model("review", reviewSchema)

export {Review}