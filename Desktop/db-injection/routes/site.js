const express = require("express");

const mysql2 = require("mysql2");

const db = require("../data/database");

const router = express.Router();

router.get("/", function (req, res) {
  res.redirect("/discussion");
});

router.get("/discussion", async function (req, res) {
  let filter = "";

  if (req.query.author) {
    filter = `WHERE author = "${req.query.author}"`;
  }
  console.log(filter);
  const query = `SELECT * FROM comments ${filter}`;
  // console.log(query);
  const [comments] = await db.query(query);
  console.log(comments);
  res.render("discussion", { comments: comments });
});

router.post("/discussion/comment", async function (req, res) {
  try {
    const result = await db.query(
      "INSERT INTO comments (author, text) VALUES(?,?)",
      [[req.body.name, req.body.text]]
    );
    console.log("the Result is:", result);
  } catch (error) {
    console.log("Cannot Add Comment");
  }

  res.redirect("/discussion");
});

module.exports = router;
