const asyncHandler = require("express-async-handler");

//@description Register User;
//path api/user/register
//access Public

const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Register the User" });
});

module.exports = { registerUser };
