const express = require("express");
const router = express.Router();
const eatReviewCtrl = require("../controllers/eateryReviews");

router.post("/", eatReviewCtrl.create);

router.get("/category/:id", eatReviewCtrl.listForOneCat);

router.get("/eatery/:id", eatReviewCtrl.listForOneEat);

router.get("/user/:id", eatReviewCtrl.listForOneUser);

router.patch("/:id", eatReviewCtrl.updateOne);

module.exports = router;
