const express = require("express");
const router = express.Router();
const eatCtrl = require("../controllers/eateries");

router.post("/", eatCtrl.create);

router.get("/category/:id", eatCtrl.listForOneCat);

router.delete("/:id", eatCtrl.deleteOne);

router.patch("/:id", eatCtrl.updateOne);

router.get("/:id", eatCtrl.listOne)

module.exports = router;
