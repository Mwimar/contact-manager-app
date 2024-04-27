const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
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

  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  console.log(`User created ${user}`);

  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    throw new Error("User Data not valid");
  }

  res.status(200).json({ message: "Register the User" });
});

//@description Login User;
//path api/user/login
//access Public

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fileds are mandatory");
  }
  res.json({ message: "log in User" });
});

//@description Current User info;
//path api/user/current
//access Private

const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "Current User information" });
});

module.exports = { registerUser, loginUser, currentUser };
