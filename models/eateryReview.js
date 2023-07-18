const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eateryReviewSchema = new Schema(
  {
    category: {
      type: Schema.Types.ObjectId,
      ref: "EateryCategory",
    },
    user: {
      type: Schema.Types.ObjectId,
      ref:"User"
    },
    name: {
      type: Schema.Types.ObjectId,
      ref: "Eatery"
    },
    image: {
      type: String,
    },
    desc: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
      default: Date.now,
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
