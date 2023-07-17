const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eaterySchema = new Schema(
  {
    category: {
      type: Schema.Types.ObjectId,
      ref: "EateryCategory",
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
    location: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    reviewStatus: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Eatery", eaterySchema);
