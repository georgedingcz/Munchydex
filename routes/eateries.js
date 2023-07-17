const express = require("express");
const router = express.Router();
const eatCtrl = require("../controllers/eateries");

router.post("/", eatCtrl.create);

module.exports = router;
