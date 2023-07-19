const Eatery = require("../models/eatery");

module.exports = {
  create,
  listForOneCat,
  // updateOne,
};

async function create(req, res) {
  try {
    const eatery = await Eatery.create(req.body);
    res.status(200).json(eatery);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function listForOneCat(req, res) {
  try {
    const categoryId = req.params.id;
    const eatery = await Eatery.find({category: categoryId}).populate("category");
    res.status(200).json(eatery);
  } catch (err) {
    res.status(500).json(err);
  }
}

// async function updateOne(req, res) {
//   try {
//     const eateryID = req.params.id;
//     const category = await Eatery.findByIdAndUpdate(eateryID, req.body);
//     res.status(200).json(category);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// }
