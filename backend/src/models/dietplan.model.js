const mongoose = require("mongoose");

const dietPlanSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    goal: {
      type: String,
      enum: ["WEIGHT_LOSS", "WEIGHT_GAIN", "MUSCLE_GAIN", "MAINTENANCE"],
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    calories: {
      type: Number,
      required: true,
    },

    meals: [
      {
        mealTime: String,
        foods: [String],
      },
    ],
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("DietPlan", dietPlanSchema);
