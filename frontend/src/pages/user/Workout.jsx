import { FaDumbbell, FaFire, FaClock, FaChartLine } from "react-icons/fa";

const Workout = () => {
  const workouts = [
    {
      name: "Push Day",
      exercises: ["Bench Press", "Shoulder Press", "Triceps Extension"],
      duration: "45 min",
      difficulty: "Intermediate",
    },

    {
      name: "Pull Day",
      exercises: ["Lat Pulldown", "Barbell Row", "Bicep Curl"],
      duration: "50 min",
      difficulty: "Advanced",
    },

    {
      name: "Leg Day",
      exercises: ["Squats", "Leg Press", "Calf Raises"],
      duration: "60 min",
      difficulty: "Hard",
    },
  ];

  return (
    <div className="text-white space-y-8">
      {/* TOP STATS */}

      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-gray-900 p-6 rounded-2xl">
          <FaDumbbell className="text-red-600 text-3xl" />

          <p className="text-gray-400 mt-4">Total Workouts</p>

          <h2 className="text-3xl font-bold">24</h2>
        </div>

        <div className="bg-gray-900 p-6 rounded-2xl">
          <FaFire className="text-red-600 text-3xl" />

          <p className="text-gray-400 mt-4">Calories Burned</p>

          <h2 className="text-3xl font-bold">8200</h2>
        </div>

        <div className="bg-gray-900 p-6 rounded-2xl">
          <FaClock className="text-red-600 text-3xl" />

          <p className="text-gray-400 mt-4">Training Time</p>

          <h2 className="text-3xl font-bold">18h</h2>
        </div>

        <div className="bg-gray-900 p-6 rounded-2xl">
          <FaChartLine className="text-red-600 text-3xl" />

          <p className="text-gray-400 mt-4">Progress</p>

          <h2 className="text-3xl font-bold">75%</h2>
        </div>
      </div>

      {/* PROGRESS */}

      <div className="bg-gray-900 rounded-2xl p-8">
        <h2 className="text-2xl font-bold">Weekly Progress</h2>

        <div className="mt-6">
          <div className="flex justify-between mb-2">
            <span>Workout Goal</span>

            <span>75%</span>
          </div>

          <div className="h-3 bg-gray-700 rounded-full">
            <div
              className="
h-3 
bg-red-600 
rounded-full 
w-[75%]
"
            />
          </div>
        </div>
      </div>

      {/* WORKOUT CARDS */}

      <div>
        <h2 className="text-3xl font-bold mb-6">Workout Categories</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {workouts.map((workout, index) => (
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
              <h3 className="text-2xl font-bold">{workout.name}</h3>

              <div className="mt-5 space-y-2">
                {workout.exercises.map((exercise, i) => (
                  <p key={i} className="text-gray-300">
                    • {exercise}
                  </p>
                ))}
              </div>

              <div className="mt-6 flex justify-between text-sm">
                <span className="text-gray-400">⏱ {workout.duration}</span>

                <span className="text-red-500">{workout.difficulty}</span>
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
                Start Workout
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workout;
