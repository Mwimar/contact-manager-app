const path = require("path");

const express = require("express");

const mysql2 = require("mysql2");

const siteRoutes = require("./routes/site");

const db = require("./data/database");

const app = express();

app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true })); //parsing incoming request bodies

app.use(express.static("public"));

app.use(siteRoutes);

app.use(function (error, req, res, next) {
  console.log(error);
  res.status(500).render("500");
});

app.listen(3000);
