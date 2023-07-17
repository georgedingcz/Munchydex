const Eatery = require("../models/eatery");

module.exports = { create };

async function create(req, res) {
  try {
    const category = await Eatery.create(req.body);
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
}
