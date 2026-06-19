import { FaAppleAlt, FaFire, FaTint, FaDrumstickBite } from "react-icons/fa";

const Diet = () => {
  const meals = [
    {
      title: "Breakfast",
      items: ["Oats", "Eggs", "Banana"],
      calories: "450 kcal",
    },

    {
      title: "Lunch",
      items: ["Chicken Breast", "Rice", "Salad"],
      calories: "650 kcal",
    },

    {
      title: "Dinner",
      items: ["Paneer", "Roti", "Vegetables"],
      calories: "500 kcal",
    },
  ];

  return (
    <div className="text-white space-y-8">
      {/* Nutrition Stats */}

      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-gray-900 p-6 rounded-2xl">
          <FaFire className="text-red-600 text-3xl" />

          <p className="text-gray-400 mt-4">Calories Goal</p>

          <h2 className="text-3xl font-bold">2200</h2>
        </div>

        <div className="bg-gray-900 p-6 rounded-2xl">
          <FaDrumstickBite className="text-red-600 text-3xl" />

          <p className="text-gray-400 mt-4">Protein</p>

          <h2 className="text-3xl font-bold">150g</h2>
        </div>

        <div className="bg-gray-900 p-6 rounded-2xl">
          <FaAppleAlt className="text-red-600 text-3xl" />

          <p className="text-gray-400 mt-4">Carbs</p>

          <h2 className="text-3xl font-bold">250g</h2>
        </div>

        <div className="bg-gray-900 p-6 rounded-2xl">
          <FaTint className="text-red-600 text-3xl" />

          <p className="text-gray-400 mt-4">Water</p>

          <h2 className="text-3xl font-bold">3L</h2>
        </div>
      </div>

      {/* Calories Progress */}

      <div className="bg-gray-900 p-8 rounded-2xl">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">Daily Calories</h2>

          <p>1600 / 2200 kcal</p>
        </div>

        <div className="mt-5 h-3 bg-gray-700 rounded-full">
          <div
            className="
h-3
bg-red-600
rounded-full
w-[70%]
"
          />
        </div>
      </div>

      {/* Meal Plan */}

      <div>
        <h2 className="text-3xl font-bold mb-6">Today's Meal Plan</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {meals.map((meal, index) => (
            <div
              key={index}
              className="
bg-gray-900
rounded-2xl
p-6
hover:-translate-y-2
transition
"
            >
              <h3 className="text-2xl font-bold">{meal.title}</h3>

              <p className="text-red-500 mt-2">{meal.calories}</p>

              <div className="mt-5 space-y-3">
                {meal.items.map((item, i) => (
                  <div key={i} className="text-gray-300">
                    ✓ {item}
                  </div>
                ))}
              </div>

              <button
                className="
mt-6
w-full
bg-red-600
py-3
rounded-xl
hover:bg-red-700
transition
"
              >
                View Meal
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Water Tracker */}

      <div className="bg-gray-900 rounded-2xl p-8">
        <h2 className="text-2xl font-bold">Water Intake</h2>

        <div className="flex gap-3 mt-6">
          {[1, 2, 3, 4, 5, 6].map((glass) => (
            <div
              key={glass}
              className="
h-12
w-12
rounded-full
bg-blue-500
flex
items-center
justify-center
"
            >
              💧
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Diet;
