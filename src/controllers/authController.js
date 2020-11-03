const { Router } = require("express");
const User = require("../models/User");
const router = Router();
const USer = require("../models/User");

router.post("/signup", (req, res, next) => {
  const { username, email, password } = req.body;
  const user = new User({
    username: username,
    email: email,
    password: password,
  });
  res.json(user);
});
router.post("/signin", (req, res, next) => {
  res.json("signin");
});
router.get("/me", (req, res, next) => {
  res.json("me");
});

module.exports = router;
