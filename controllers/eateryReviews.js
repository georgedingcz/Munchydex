const EateryReview = require("../models/eateryReview");

module.exports = {
  create,
  listForOneCat,
  listForOneEat,
  listForOneUser,
  updateOne,
  deleteOne,
  listOne,
};

async function create(req, res) {
  try {
    const eateryReview = await EateryReview.create(req.body);
    res.status(200).json(eateryReview);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function listForOneCat(req, res) {
  try {
    const categoryId = req.params.id;
    const reviews = await EateryReview.find({ category: categoryId }).populate(
      "category"
    );
    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function listForOneEat(req, res) {
  try {
    const eateryID = req.params.id;
    const reviews = await EateryReview.find({ name: eateryID }).populate(
      "name"
    );
    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function listForOneUser(req, res) {
  try {
    const userID = req.params.id;
    const reviews = await EateryReview.find({ user: userID })
      .populate("user")
      .populate("category")
      .populate("name");
    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function listOne(req, res) {
  try {
    const chosenReviewId = req.params.id;
    const chosenReview = await EateryReview.findById(chosenReviewId, req.body)
      .populate("name")
      .populate("user")
      .populate("category");
    res.status(200).json(chosenReview);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function updateOne(req, res) {
  try {
    const reviewID = req.params.id;
    const reviews = await EateryReview.findByIdAndUpdate(reviewID, req.body);
    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function deleteOne(req, res) {
  try {
    const reviewID = req.params.id;
    const reviews = await EateryReview.findByIdAndDelete(reviewID);
    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json(err);
  }
}
