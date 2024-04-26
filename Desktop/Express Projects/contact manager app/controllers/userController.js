const asyncHandler = require("express-async-handler");

//@description Register User;
//path api/user/register
//access Public
const registerUser = asyncHandler(async (req, res) => {
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
