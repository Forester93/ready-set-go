const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  date: {
    type: Date,
    default: new Date(new Date().setDate(new Date().getDate() - 2)),
  },

  day: {
    type: Date,
    default: new Date(new Date().setDate(new Date().getDate() - 2)),
  },

  exercises: {
    type: Array,
    trim: true,
    default: [],
  },
  totalDuration: {
    type: Number,
    default: 0,
  },
});

workoutSchema.methods.calculateDuration = function () {
  console.log(this.exercises.reduce((acc, { duration }) => (acc += duration)));
  this.totalDuration = this.exercises.reduce(
    (acc, { duration }) => (acc += duration)
  );
};

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
