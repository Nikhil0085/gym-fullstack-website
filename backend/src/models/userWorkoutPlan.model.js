const mongoose = require("mongoose");

const userWorkoutPlanSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    workoutPlan: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "workoutPlan",
      required: true,
    },

    assignedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    assignedDate: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("UserWorkoutplan", userWorkoutPlanSchema);
