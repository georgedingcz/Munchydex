const express = require("express");
const router = express.Router();
const eatReviewCtrl = require("../controllers/eateryReviews");

router.post("/", eatReviewCtrl.create);

router.get("/category/:id", eatReviewCtrl.listForOneCat);

router.get("/eatery/:id", eatReviewCtrl.listForOneEat);

router.get("/user/:id", eatReviewCtrl.listForOneUser);

router.get("/:id", eatReviewCtrl.listOne);

router.patch("/:id", eatReviewCtrl.updateOne);

router.delete("/:id", eatReviewCtrl.deleteOne);

module.exports = router;
