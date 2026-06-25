const model = require("../config/gemini");

const Chat = require("../models/chat.model");
const Membership = require("../models/membership.model");
const Workout = require("../models/workout.model");
const Diet = require("../models/dietplan.model");

const chatWithAI = async (req, res) => {
  try {
    const { message } = req.body;

    await Chat.create({
      user: req.user.id,
      message,
      sender: "USER",
    });

    // Get membership data from database

      const memberships = await Membership.find();
      const workouts = await Workout.find();

      const diets = await Diet.find();

    let membershipContext = "";

    memberships.forEach((plan) => {
      membershipContext += `
      Plan Name: ${plan.name}
      Price: ₹${plan.price}
      Duration: ${plan.durationInDays} days
      Description: ${plan.description}
      Features: ${plan.features.join(", ")}
      
      `;
    });
      let workoutContext = "";

      workouts.forEach((workout) => {
        workoutContext += `
Workout Name: ${workout.title}
Goal: ${workout.goal}
Description: ${workout.description}
Exercises:
${workout.exercises.map((day) => `${day.day}: ${day.workout.map((ex) => ex.exerciseName).join(", ")}`).join("\n")}


`;
      });

      let dietContext = "";

      diets.forEach((diet) => {
        dietContext += `
Diet Name: ${diet.title}
Goal: ${diet.goal}
Description: ${diet.description}
Calories: ${diet.calories}
Meals:
${diet.meals.map((meal) => `${meal.mealTime}: ${meal.foods.join(", ")}`).join("\n")}
`;
      });

    const prompt = `
You are GymPro AI assistant.

You help users related to gym management.

Gym information:

Gym name:
GymPro

Services:
- Memberships
- Workout plans
- Diet plans
- Personal training


Available Membership Plans:

${membershipContext}

Workout Plans:

${workoutContext}


Diet Plans:

${dietContext}


Rules:

- Answer only gym related questions.
- If user asks membership price, provide exact price from available plans.
- Keep answers professional and short.
- Help users with fitness, workout, diet and membership questions.


User Question:

${message}

`;

    let reply;

    try {
      const result = await model.generateContent(prompt);

      reply = result.response.text();
    } catch (error) {
      console.log("Gemini Error:", error.message);

      reply = "Sorry, GymPro AI is temporarily busy. Please try again later.";
    }

    await Chat.create({
      user: req.user.id,

      message: reply,

      sender: "AI",
    });

    return res.status(200).json({
      success: true,

      reply,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const getChatHistory = async (req, res) => {
  try {
    const chats = await Chat.find({
      user: req.user.id,
    }).sort({
      createdAt: 1,
    });

    return res.status(200).json({
      success: true,

      chats,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  chatWithAI,

  getChatHistory,
};
