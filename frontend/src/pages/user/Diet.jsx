import { useEffect, useState } from "react";

import { getMyDietPlan } from "../../api/diet.api";

const Diet = () => {
  const [diet, setDiet] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDiet = async () => {
      try {
        const data = await getMyDietPlan();

        setDiet(data.plan);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDiet();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading Diet Plan...
      </div>
    );
  }

  if (!diet) {
    return (
      <div className="min-h-screen bg-black text-white p-8">
        <h1 className="text-3xl font-bold">No Diet Plan Assigned</h1>

        <p className="text-gray-400 mt-3">
          Your trainer has not assigned a diet plan yet.
        </p>
      </div>
    );
  }

  const plan = diet.dietPlan;

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8">My Diet Plan</h1>

      <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8">
        <h2 className="text-4xl font-bold text-red-600">{plan.title}</h2>

        <p className="text-gray-400 mt-3">{plan.description}</p>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-black rounded-2xl p-5 border border-gray-800">
            <p className="text-gray-400">Goal</p>

            <h3 className="text-2xl font-bold mt-2">
              {plan.goal.replace("_", " ")}
            </h3>
          </div>

          <div className="bg-black rounded-2xl p-5 border border-gray-800">
            <p className="text-gray-400">Daily Calories</p>

            <h3 className="text-3xl font-bold mt-2 text-red-500">
              {plan.calories} kcal
            </h3>
          </div>
        </div>

        <h2 className="text-3xl font-bold mt-10 mb-6">Meal Plan</h2>

        <div className="space-y-6">
          {plan.meals.map((meal, index) => (
            <div
              key={index}
              className="bg-black border border-gray-800 rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold text-red-500">
                {meal.mealTime}
              </h3>

              <div className="mt-4 space-y-2">
                {meal.foods.map((food, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <span className="h-2 w-2 rounded-full bg-red-600"></span>

                    {food}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Diet;
