const EateryCategory = require("../models/eateryCategory");

module.exports = {
  create,
  listAll,
  deleteOne,
  updateOne,
  listOne,
};

async function create(req, res) {
  try {
    const category = await EateryCategory.create(req.body);
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function listAll(req, res) {
  try {
    const category = await EateryCategory.find(req.body);
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function listOne(req, res) {
  try {
    const chosenCatId = req.params.id;
    const chosenCat = await EateryCategory.findById(chosenCatId, req.body);
    res.status(200).json(chosenCat);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function deleteOne(req, res) {
  try {
    const categoryId = req.params.id;
    const category = await EateryCategory.findByIdAndDelete(
      categoryId,
      req.body
    );
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function updateOne(req, res) {
  try {
    const categoryId = req.params.id;
    const category = await EateryCategory.findByIdAndUpdate(
      categoryId,
      req.body
    );
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
}
