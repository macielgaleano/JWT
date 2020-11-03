const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
});

model("user", userSchema);

module.exports = model("user", userSchema);
