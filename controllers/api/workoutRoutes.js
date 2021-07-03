const router = require("express").Router();
const db = require("../../models");

//create new workout
router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const newWorkout = await db.Workout.create({
      ...req.body,
      day: new Date(new Date().setDate(new Date().getDate() - 1)),
    });
    res.json(newWorkout);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

//get all workouts
router.get("/", async (req, res) => {
  try {
    const allWorkouts = await db.Workout.find({});
    for (let item of allWorkouts) {
      item.calculateDuration();
      console.log(item.totalDuration);
    }
    // console.log(allWorkouts);
    res.json(allWorkouts);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

//get workouts in range
router.get("/range", async (req, res) => {
  try {
    const allWorkouts = await db.Workout.find({});
    console.log(allWorkouts);
    res.json(allWorkouts);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

//add exercise to workout

router.put("/:id", async (req, res) => {
  try {
    const updatedWorkout = await db.Workout.findOneAndUpdate(
      { _id: req.params.id },
      {
        day: new Date(new Date().setDate(new Date().getDate() - 2)),
        $push: {
          exercises: req.body,
        },
      },
      { new: true }
    );
    console.log(updatedWorkout);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

module.exports = router;
