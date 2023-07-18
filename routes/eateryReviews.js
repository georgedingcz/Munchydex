const express = require("express");
const router = express.Router();
const eatReviewCtrl = require("../controllers/eateryReviews");

router.post("/", eatReviewCtrl.create);

module.exports = router;
