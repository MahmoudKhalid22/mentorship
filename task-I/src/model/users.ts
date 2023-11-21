const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    min:7,
    required: true,
  },
});

const User = new mongoose.model("User", userSchema);

module.exports = User;
