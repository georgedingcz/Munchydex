const User = require("../../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports = {
  create,
  login,
  checkToken,
  updatePass,
};

async function create(req, res) {
  try {
    const user = await User.create(req.body);
    const token = createJWT(user);
    res.json(token);
  } catch (err) {
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
  return jwt.sign({ user }, process.env.SECRET, { expiresIn: "24h" });
}

function checkToken(req, res) {
  console.log("req.user", req.user);
  res.json(req.exp);
}

async function updatePass(req, res) {
  try {
    const userID = req.params.id;
    console.log(userID);
    const user = await User.findById(userID);
    const match = await bcrypt.compare(req.body.currentPass, user.password);
    if (!user) throw new Error();
    if (!match) throw new Error();
    const newPass = req.body.newPass;
    const hashNewPass = await bcrypt.hash(newPass, 6);
    await User.findByIdAndUpdate(userID, { password: hashNewPass });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
}

