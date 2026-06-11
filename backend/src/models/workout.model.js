const mongoose = require("mongoose")

const workOutPlanSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "title is required"],
  },
  goal: {
    type: String,
      enum: ["WEIGHT_LOSS", "WEIGHT_GAIN", "MUSCLE_GAIN", "MAINTENANCE"],
    required:true,
    },
    description: {
        type: String,
        required:true
    },
   exercises: [
      {
        day: String,

        workout: [
          {
            exerciseName: String,
            sets: Number,
            reps: Number,
          },
        ],
      },
    ],   
},
{
    timestamps:true,
    });

module.exports = mongoose.model("workoutPlan", workOutPlanSchema);