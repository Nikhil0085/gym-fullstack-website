import { useEffect, useState } from "react";

import {
  getUsers,
  getWorkouts,
  getDiets,
  assignWorkout,
  assignDiet,
} from "../../api/adminAssign.api";

const AdminAssign = () => {
  const [users, setUsers] = useState([]);
  const [workouts, setWorkouts] = useState([]);
  const [diets, setDiets] = useState([]);

  const [selectedWorkoutUser, setSelectedWorkoutUser] = useState("");
  const [selectedDietUser, setSelectedDietUser] = useState("");

  const [selectedWorkout, setSelectedWorkout] = useState("");
  const [selectedDiet, setSelectedDiet] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const usersData = await getUsers();
      const workoutsData = await getWorkouts();
      const dietsData = await getDiets();

      setUsers(usersData.users.filter((user) => user.role === "USER"));

      setWorkouts(workoutsData.workouts);

      setDiets(dietsData.diets);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAssignWorkout = async () => {
    try {
      await assignWorkout({
        userId: selectedWorkoutUser,
        workoutId: selectedWorkout,
      });

      alert("Workout Assigned Successfully");

      setSelectedWorkoutUser("");
      setSelectedWorkout("");
    } catch (error) {
      alert(error.response?.data?.message || "Assignment Failed");
    }
  };

  const handleAssignDiet = async () => {
    try {
      await assignDiet({
        userId: selectedDietUser,
        dietPlanId: selectedDiet,
      });

      alert("Diet Assigned Successfully");

      setSelectedDietUser("");
      setSelectedDiet("");
    } catch (error) {
      alert(error.response?.data?.message || "Assignment Failed");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Assign Plans</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
          <h2 className="text-2xl font-bold text-red-500 mb-6">
            Assign Workout
          </h2>

          <select
            className="w-full bg-black border border-gray-700 p-3 rounded-lg mb-4"
            value={selectedWorkoutUser}
            onChange={(e) => setSelectedWorkoutUser(e.target.value)}
          >
            <option value="">Select User</option>   

            {users.map((user) => (
              <option key={user._id} value={user._id}>
                {user.name}
              </option>
            ))}
          </select>

          <select
            className="w-full bg-black border border-gray-700 p-3 rounded-lg mb-4"
            value={selectedWorkout}
            onChange={(e) => setSelectedWorkout(e.target.value)}
          >
            <option value="">Select Workout</option>

            {workouts.map((workout) => (
              <option key={workout._id} value={workout._id}>
                {workout.title}
              </option>
            ))}
          </select>

          <button
            onClick={handleAssignWorkout}
            className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg font-semibold"
          >
            Assign Workout
          </button>
        </div>

        <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
          <h2 className="text-2xl font-bold text-green-500 mb-6">
            Assign Diet
          </h2>

          <select
            className="w-full bg-black border border-gray-700 p-3 rounded-lg mb-4"
            value={selectedDietUser}
            onChange={(e) => setSelectedDietUser(e.target.value)}
          >
            <option value="">Select User</option>

            {users.map((user) => (
              <option key={user._id} value={user._id}>
                {user.name}
              </option>
            ))}
          </select>

          <select
            className="w-full bg-black border border-gray-700 p-3 rounded-lg mb-4"
            value={selectedDiet}
            onChange={(e) => setSelectedDiet(e.target.value)}
          >
            <option value="">Select Diet Plan</option>

            {diets.map((diet) => (
              <option key={diet._id} value={diet._id}>
                {diet.title}
              </option>
            ))}
          </select>

          <button
            onClick={handleAssignDiet}
            className="w-full bg-green-600 hover:bg-green-700 py-3 rounded-lg font-semibold"
          >
            Assign Diet
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminAssign;
