const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eateryCategorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
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

module.exports = mongoose.model("EateryCategory", eateryCategorySchema);
