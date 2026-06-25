import { useEffect, useState } from "react";

import { getMyWorkout } from "../../api/workout.api";

const Workout = () => {
  const [workout, setWorkout] = useState(null);

  const [loading, setLoading] = useState(true);

  const [completedExercises, setCompletedExercises] = useState([]);

  useEffect(() => {
    const fetchWorkout = async () => {
      try {
        const data = await getMyWorkout();

        setWorkout(data.plan);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkout();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading Workout...
      </div>
    );
  }

  if (!workout) {
    return (
      <div className="min-h-screen bg-black text-white p-8">
        <h1 className="text-3xl font-bold">No Workout Assigned</h1>

        <p className="text-gray-400 mt-3">
          Your trainer has not assigned a workout plan yet.
        </p>
      </div>
    );
  }

  const plan = workout.workoutPlan;

  const allExercises = plan.exercises.flatMap((day) => day.workout);

  const totalExercises = allExercises.length;

  const progress =
    totalExercises === 0
      ? 0
      : Math.round((completedExercises.length / totalExercises) * 100);

  const toggleExercise = (exerciseName) => {
    if (completedExercises.includes(exerciseName)) {
      setCompletedExercises(
        completedExercises.filter((item) => item !== exerciseName),
      );
    } else {
      setCompletedExercises([...completedExercises, exerciseName]);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8">My Workout Dashboard</h1>

      <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-3xl p-8 shadow-xl">
        <h2 className="text-4xl font-bold">{plan.title}</h2>

        <p className="mt-3 text-gray-200">{plan.description}</p>

        <span className="inline-block mt-5 bg-black px-5 py-2 rounded-full text-sm">
          {plan.goal.replace("_", " ")}
        </span>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
          <h3 className="text-gray-400">Total Days</h3>

          <p className="text-4xl font-bold mt-2">{plan.exercises.length}</p>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
          <h3 className="text-gray-400">Total Exercises</h3>

          <p className="text-4xl font-bold mt-2">{totalExercises}</p>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
          <h3 className="text-gray-400">Progress</h3>

          <p className="text-4xl font-bold mt-2 text-red-500">{progress}%</p>
        </div>
      </div>

      <div className="mt-10 bg-gray-900 rounded-3xl p-8 border border-gray-800">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-bold">Workout Progress</h2>

          <span>
            {completedExercises.length}/{totalExercises}
          </span>
        </div>

        <div className="w-full bg-black rounded-full h-3">
          <div
            className="bg-red-600 h-3 rounded-full transition-all"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-12 mb-6">Workout Schedule</h2>

      <div className="space-y-8">
        {plan.exercises.map((day, index) => (
          <div
            key={index}
            className="bg-gray-900 border border-gray-800 rounded-3xl p-6"
          >
            <h3 className="text-2xl font-bold text-red-500 mb-5">{day.day}</h3>

            <div className="grid md:grid-cols-2 gap-5">
              {day.workout.map((exercise, i) => {
                const completed = completedExercises.includes(
                  exercise.exerciseName,
                );

                return (
                  <div
                    key={i}
                    className="bg-black rounded-2xl p-5 border border-gray-800"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="text-xl font-bold">
                          {exercise.exerciseName}
                        </h4>

                        <p className="text-gray-400 mt-2">
                          {exercise.sets} Sets × {exercise.reps} Reps
                        </p>
                      </div>

                      <button
                        onClick={() => toggleExercise(exercise.exerciseName)}
                        className={`h-10 w-10 rounded-full flex items-center justify-center ${
                          completed ? "bg-green-600" : "bg-red-600"
                        }`}
                      >
                        ✓
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workout;
