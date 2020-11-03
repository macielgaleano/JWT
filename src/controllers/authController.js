const { Router } = require("express");
const User = require("../models/User");
const router = Router();
const jwt = require("jsonwebtoken");

router.post("/signup", async (req, res, next) => {
  const { username, email, password } = req.body;
  const user = new User({
    username: username,
    email: email,
    password: password,
  });
  user.password = await user.encryptPassword(user.password);
  await user.save();
  jwt.sign({ id: user._id });
  res.json();
});
router.post("/signin", (req, res, next) => {
  res.json("signin");
});
router.get("/me", (req, res, next) => {
  res.json("me");
});

module.exports = router;
