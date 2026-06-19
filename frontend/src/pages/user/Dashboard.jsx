import { useEffect, useState } from "react";

import { getActiveMembership } from "../../api/dashboard.api";

import { FaDumbbell, FaAppleAlt, FaCalendarAlt, FaFire } from "react-icons/fa";

const Dashboard = () => {
  const [membership, setMembership] = useState(null);

  useEffect(() => {
    const fetchMembership = async () => {
      try {
        const data = await getActiveMembership();

        setMembership(data.membership);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMembership();
  }, []);

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-gray-900 rounded-2xl p-6">
          <FaDumbbell className="text-red-600 text-3xl" />

          <h3 className="mt-4 text-gray-400">Current Plan</h3>

          <p className="text-2xl font-bold mt-2">
            {membership?.planName || "No Plan"}
          </p>
        </div>

        <div className="bg-gray-900 rounded-2xl p-6">
          <FaCalendarAlt className="text-red-600 text-3xl" />

          <h3 className="mt-4 text-gray-400">Expiry Date</h3>

          <p className="text-xl font-bold mt-2">
            {membership ? new Date(membership.endDate).toDateString() : "N/A"}
          </p>
        </div>

        <div className="bg-gray-900 rounded-2xl p-6">
          <FaFire className="text-red-600 text-3xl" />

          <h3 className="mt-4 text-gray-400">Status</h3>

          <p className="text-2xl font-bold mt-2 text-green-500">
            {membership?.status || "Inactive"}
          </p>
        </div>

        <div className="bg-gray-900 rounded-2xl p-6">
          <FaAppleAlt className="text-red-600 text-3xl" />

          <h3 className="mt-4 text-gray-400">Diet Plan</h3>

          <p className="text-xl font-bold mt-2">Premium</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-900 rounded-2xl p-8">
          <h2 className="text-2xl font-bold">Workout Progress</h2>

          <p className="text-gray-400 mt-2">
            Track your daily workout performance.
          </p>

          <div className="mt-6">
            <div className="flex justify-between mb-2">
              <span>Weekly Goal</span>

              <span>70%</span>
            </div>

            <div className="h-3 bg-gray-700 rounded-full">
              <div className="h-3 bg-red-600 rounded-full w-[70%]"></div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 rounded-2xl p-8">
          <h2 className="text-2xl font-bold">Quick Actions</h2>

          <div className="mt-6 space-y-4">
            <button className="w-full bg-red-600 py-3 rounded-xl hover:bg-red-700 transition">
              View Workout Plan
            </button>

            <button className="w-full border border-gray-700 py-3 rounded-xl hover:bg-gray-800 transition">
              View Diet Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
