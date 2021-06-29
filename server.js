const express = require("express");
const mongoose = require("mongoose");

var PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/readySetGoDB",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
  }
);

// routes
// app.use(require("./controllers"));

app.get("/", (req, res) => {
  res.redirect("index.html");
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
