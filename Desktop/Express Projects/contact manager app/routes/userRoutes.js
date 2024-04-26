const express = require("express");
const router = express.Router();

const { registerUser } = require("../controllers/userController");

router.post("/register", registerUser);

router.post("/login", (req, res) => {
  res.json({ message: "log in User" });
});

router.get("/current", (req, res) => {
  res.json({ message: "Current User information" });
});

module.exports = router;
