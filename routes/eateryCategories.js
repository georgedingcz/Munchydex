const express = require("express");
const router = express.Router();
const eatCatCtrl = require("../controllers/eateryCategories");

router.post("/", eatCatCtrl.create);

router.get("/", eatCatCtrl.listAll);

module.exports = router;
