const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eateryReviewSchema = new Schema(
  {
    image: {
      type: String,
    },
    review: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    score: {
      type: Number,
      required: true,
      min: 1,
      max: 10,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("EateryReview", eateryReviewSchema);
