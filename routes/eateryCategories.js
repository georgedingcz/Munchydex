const express = require("express");
const router = express.Router();
const eatCatCtrl = require("../controllers/eateryCategories");

router.post("/", eatCatCtrl.create);

router.get("/new", async (req, res) => {
  res.send("All Categories");
});

module.exports = router;
