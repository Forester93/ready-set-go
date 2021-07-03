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

app.get("/exercise", (req, res) => {
  res.redirect("exercise.html");
});

app.get("/stats", (req, res) => {
  res.redirect("stats.html");
});

//create new workout
app.post("/api/workouts", async (req, res) => {
  try {
    console.log(req.body);
    const newWorkout = await db.readySetGoDB.insert(req.body);
    res.json(newWorkout);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
