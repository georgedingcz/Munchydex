const express = require("express");
const router = express.Router();
const usersCtrl = require("../../controllers/api/users");

// require the authorization middleware function
const ensureLoggedIn = require("../../config/ensureLoggedIn");

// GET /api/users/check-token
router.get("/check-token", ensureLoggedIn, usersCtrl.checkToken);
router.patch("/:id", ensureLoggedIn, usersCtrl.updatePass);

//POST/api/users
router.post("/", usersCtrl.create);
router.post("/login", usersCtrl.login);

module.exports = router;
