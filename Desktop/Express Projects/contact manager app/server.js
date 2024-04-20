const express = require("express");

const dotenv = require("dotenv").config();

const port = process.env.PORT || 5000;

const app = express();

app.get("/api/contacts", (req, res) => {
  res.status(200).json({ message: "get all contacts" });
});

app.listen(port, () => {
  console.log("Were Up Baby!!!!!!!");
});
