const Eatery = require("../models/eatery");

module.exports = {
  create,
  listAll,
};

async function create(req, res) {
  try {
    const eatery = await Eatery.create(req.body);
    res.status(200).json(eatery);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function listAll(req, res) {
  try {
    const eatery = await Eatery.find(req.body);
    res.status(200).json(eatery);
  } catch (err) {
    res.status(500).json(err);
  }
}
