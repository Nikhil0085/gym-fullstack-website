import { useEffect, useState } from "react";

import {
  getAllWorkouts,
  createWorkout,
  deleteWorkout,
} from "../../api/adminWorkout.api";

const ManageWorkout = () => {
  const [workouts, setWorkouts] = useState([]);

  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState({
    title: "",
    goal: "MUSCLE_GAIN",
    description: "",
  });

  const fetchWorkouts = async () => {
    try {
      const data = await getAllWorkouts();

      setWorkouts(data.workouts || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWorkouts();
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();

    try {
      await createWorkout({
        ...form,

        exercises: [
          {
            day: "Monday",
            workout: [
              {
                exerciseName: "Bench Press",
                sets: 4,
                reps: 10,
              },
            ],
          },
        ],
      });

      setForm({
        title: "",
        goal: "MUSCLE_GAIN",
        description: "",
      });

      fetchWorkouts();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteWorkout(id);

      fetchWorkouts();
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return <div className="text-white p-8">Loading workouts...</div>;
  }

  return (
    <div className="p-8 text-white">
      <h1 className="text-4xl font-bold mb-8">Manage Workout Plans</h1>

      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-10">
        <h2 className="text-2xl font-bold mb-5">Create Workout</h2>

        <form onSubmit={handleCreate} className="space-y-4">
          <input
            className="w-full bg-black border border-gray-700 rounded-xl p-3"
            placeholder="Workout Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />

          <select
            className="w-full bg-black border border-gray-700 rounded-xl p-3"
            value={form.goal}
            onChange={(e) => setForm({ ...form, goal: e.target.value })}
          >
            <option value="MUSCLE_GAIN">Muscle Gain</option>

            <option value="WEIGHT_LOSS">Weight Loss</option>

            <option value="WEIGHT_GAIN">Weight Gain</option>

            <option value="MAINTENANCE">Maintenance</option>
          </select>

          <textarea
            className="w-full bg-black border border-gray-700 rounded-xl p-3"
            placeholder="Description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />

          <button className="bg-red-600 px-6 py-3 rounded-xl">
            Create Workout
          </button>
        </form>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {workouts.map((item) => (
          <div
            key={item._id}
            className="bg-gray-900 border border-gray-800 rounded-2xl p-6"
          >
            <h2 className="text-2xl font-bold text-red-500">{item.title}</h2>

            <p className="text-gray-400 mt-3">{item.description}</p>

            <p className="mt-3">
              Goal:
              <span className="text-red-500 ml-2">{item.goal}</span>
            </p>

            <div className="mt-5">
              <h3 className="font-bold">Exercises</h3>

              {item.exercises.map((day, index) => (
                <div key={index} className="mt-3">
                  <p className="text-red-500">{day.day}</p>

                  {day.workout.map((ex, i) => (
                    <p key={i} className="text-gray-400">
                      {ex.exerciseName} - {ex.sets} Sets × {ex.reps} Reps
                    </p>
                  ))}
                </div>
              ))}
            </div>

            <button
              onClick={() => handleDelete(item._id)}
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

export default ManageWorkout;
