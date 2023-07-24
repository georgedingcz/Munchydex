const express = require("express");
const router = express.Router();
const eatCatCtrl = require("../controllers/eateryCategories");

router.post("/", eatCatCtrl.create);

router.get("/", eatCatCtrl.listAll);

router.delete("/:id", eatCatCtrl.deleteOne);

router.patch("/:id", eatCatCtrl.updateOne);

router.get("/:id", eatCatCtrl.listOne)

module.exports = router;
