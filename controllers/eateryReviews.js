const EateryReview = require("../models/eateryReview");

module.exports = {
  create,
};

async function create(req, res) {
  try {
    const eateryReview = await EateryReview.create(req.body);
    res.status(200).json(eateryReview);
  } catch (err) {
    res.status(500).json(err);
  }
}
