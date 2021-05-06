const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({ 
    
    day: {type: Date, trim: true, default: Date.now},

    exercises: [{
  name: {
    type: String,
    trim: true,
    required: "Name is Required"
  },

  type: {
    type: String,
    trim: true,
  },

  weight: {
    type: String,
    trim: true,
  },

  sets: {
    type: Number,
    trim: true,
  },

  reps: {
    type: Number,
    trim: true,
  },

  duration: {
    type: String,
    trim: true,
  }
    }]
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
