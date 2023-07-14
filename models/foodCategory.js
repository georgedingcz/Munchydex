const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodCategorySchema = new Schema(
  {
    foodCategory: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      required: true,
    },
    briefDesc: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("FoodCategory", foodCategorySchema);
