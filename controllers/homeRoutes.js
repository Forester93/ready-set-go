const router = require("express").Router();
// const withAuth = require("../utils/auth");

router.get("/", (req, res) => {
  res.redirect("index.html");
});

router.get("/exercise", (req, res) => {
  res.redirect("exercise.html");
});

router.get("/stats", (req, res) => {
  res.redirect("stats.html");
});

module.exports = router;
