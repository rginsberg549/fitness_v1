const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a name for the exercise."
  },
  type: {
    type: String,
    trim: true,
    required: "Enter a name for the exercise."
  },
  weight: {
    type: Number,
    required: "Enter the weight in kilograms."
  },
  sets: {
    type: Number,
    required: "Enter how many sets."
  },
  reps: {
    type: Number,
    required: "Enter how many repetitions."
  },
  duration: {
    type: Number,
    required: "Enter the exercise duration."
  },
  distance: {
    type: Number,
    required: "Enter the distance in kilometers."
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
