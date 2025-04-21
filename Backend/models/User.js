const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ["Male", "Female", "Other"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  name: String,
  profilePic: String, // URL to image
});

module.exports = mongoose.model("User", UserSchema);
