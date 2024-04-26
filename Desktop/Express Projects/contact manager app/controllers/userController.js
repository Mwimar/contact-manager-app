const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");

//@description Register User;
//path api/user/register
//access Public
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are Mandatory");
  }

  const userAvailable = await User.findOne({ email });

  if (userAvailable) {
    res.status(400);
    throw new Error("User already exists");
  }

  //hashed password
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("Hashed Password:", hashedPassword);

  res.status(200).json({ message: "Register the User" });
});

//@description Login User;
//path api/user/login
//access Public

const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "log in User" });
});

//@description Current User info;
//path api/user/current
//access Private

const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "Current User information" });
});

module.exports = { registerUser, loginUser, currentUser };
