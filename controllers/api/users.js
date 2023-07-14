const User = require("../../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports = {
  create,
  login,
  checkToken,
};

// function create(req, res) {
//   res.json({
//     user: {
//       name: req.body.name,
//       email: req.body.email,
//     },
//   });
// }

async function create(req, res) {
  try {
    //add the user to the database
    const user = await User.create(req.body);
    //token will be a string
    const token = createJWT(user);
    //yes, we can use res.json to send back just a string
    //the client code needs to take this into consideration
    res.json(token);
  } catch (err) {
    //Client will check fr non-2xx status code
    //400 = bad request
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) throw new Error();
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    res.json(createJWT(user));
  } catch {
    res.status(400).json("Bad Credentials");
  }
}

function createJWT(user) {
  return jwt.sign(
    //data payload
    { user },
    process.env.SECRET,
    { expiresIn: "24h" }
  );
}

function checkToken(req, res) {
  // req.user will always be there for you when a token is sent
  console.log("req.user", req.user);
  res.json(req.exp);
}
