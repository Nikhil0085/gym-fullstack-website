import { useEffect, useState } from "react";

import { getAllDiets, createDiet, deleteDiet } from "../../api/adminDiet.api";

const ManageDiet = () => {
  const [diets, setDiets] = useState([]);

  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState({
    title: "",
    goal: "WEIGHT_LOSS",
    description: "",
    calories: "",
  });

  const fetchDiets = async () => {
    try {
      const data = await getAllDiets();

      setDiets(data.diets || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDiets();
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();

    try {
      await createDiet({
        ...form,

        calories: Number(form.calories),

        meals: [
          {
            mealTime: "Breakfast",
            foods: ["Oats", "Fruit"],
          },

          {
            mealTime: "Lunch",
            foods: ["Rice", "Salad"],
          },

          {
            mealTime: "Dinner",
            foods: ["Soup", "Vegetables"],
          },
        ],
      });

      setForm({
        title: "",
        goal: "WEIGHT_LOSS",
        description: "",
        calories: "",
      });

      fetchDiets();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDiet(id);

      fetchDiets();
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return <div className="text-white p-8">Loading Diet Plans...</div>;
  }

  return (
    <div className="p-8 text-white">
      <h1 className="text-4xl font-bold mb-8">Manage Diet Plans</h1>

      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-10">
        <h2 className="text-2xl font-bold mb-5">Create Diet Plan</h2>

        <form onSubmit={handleCreate} className="space-y-4">
          <input
            className="w-full bg-black border border-gray-700 rounded-xl p-3"
            placeholder="Diet Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />

          <select
            className="w-full bg-black border border-gray-700 rounded-xl p-3"
            value={form.goal}
            onChange={(e) => setForm({ ...form, goal: e.target.value })}
          >
            <option value="WEIGHT_LOSS">Weight Loss</option>

            <option value="WEIGHT_GAIN">Weight Gain</option>

            <option value="MUSCLE_GAIN">Muscle Gain</option>

            <option value="MAINTENANCE">Maintenance</option>
          </select>

          <textarea
            className="w-full bg-black border border-gray-700 rounded-xl p-3"
            placeholder="Description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />

          <input
            className="w-full bg-black border border-gray-700 rounded-xl p-3"
            placeholder="Calories"
            value={form.calories}
            onChange={(e) => setForm({ ...form, calories: e.target.value })}
          />

          <button className="bg-red-600 px-6 py-3 rounded-xl">
            Create Diet
          </button>
        </form>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {diets.map((diet) => (
          <div
            key={diet._id}
            className="bg-gray-900 border border-gray-800 rounded-2xl p-6"
          >
            <h2 className="text-2xl font-bold text-red-500">{diet.title}</h2>

            <p className="text-gray-400 mt-3">{diet.description}</p>

            <p className="mt-3">
              Calories:
              <span className="text-red-500 ml-2">{diet.calories}</span>
            </p>

            <div className="mt-5">
              <h3 className="font-bold">Meals</h3>

              {diet.meals.map((meal, index) => (
                <div key={index} className="mt-3">
                  <p className="text-red-500">{meal.mealTime}</p>

                  <p className="text-gray-400">{meal.foods.join(", ")}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => handleDelete(diet._id)}
              className="mt-6 bg-red-600 px-5 py-2 rounded-xl"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageDiet;
