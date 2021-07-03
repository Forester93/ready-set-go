const express = require("express");
const mongoose = require("mongoose");
const db = require("./models");

var PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//connection
require("./config/connection");

// routes
app.use(require("./controllers"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
