const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");

//Always require and configure near the top
require("dotenv").config();
require("./config/database");

const app = express();

app.use(logger("dev"));
app.use(express.json());

//configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));

// Middleware to verify token and assign user object of payload to req.user.
// Be sure to mount before routes
app.use(require("./config/checkToken"));

//configure to use port 3001 instead of 3000 during
//development to avoid collision with react's dev server
const port = process.env.PORT || 3001;

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});

// Put API routes here, before the "catch all" route
app.use("/api/users", require("./routes/api/users"));

const eatCatRouter = require("./routes/eateryCategories");
app.use("/categories", eatCatRouter);