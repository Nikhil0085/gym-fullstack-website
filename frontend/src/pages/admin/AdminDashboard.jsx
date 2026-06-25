import { useEffect, useState } from "react";

import { getAdminStats } from "../../api/admin.api";

const AdminDashboard = () => {
  const [data, setData] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await getAdminStats();

        setData(response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading Dashboard...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>

      <div className="grid md:grid-cols-4 gap-6">
        <Card title="Total Users" value={data.stats.users} />

        <Card title="Membership Plans" value={data.stats.memberships} />

        <Card title="Workout Plans" value={data.stats.workouts} />

        <Card title="Diet Plans" value={data.stats.diets} />
      </div>

      <div className="mt-10 bg-gray-900 border border-gray-800 rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-5">Recent Users</h2>

        <div className="space-y-4">
          {data.recentUsers.map((user) => (
            <div
              key={user._id}
              className="flex justify-between bg-black p-4 rounded-lg"
            >
              <div>
                <p className="font-semibold">{user.name}</p>

                <p className="text-gray-400">{user.email}</p>
              </div>

              <span className="text-red-500">{user.role}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 bg-gray-900 border border-gray-800 rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-5">Recent Membership Purchases</h2>

        {data.recentPurchases.map((item) => (
          <div key={item._id} className="bg-black rounded-xl p-4 mb-4">
            <h3 className="font-bold text-lg">
              {item.user?.name || "Deleted User"}
            </h3>

            <p className="text-gray-400">
              {item.membership?.name || "Deleted Membership"}
            </p>

            <p>
              Status:
              <span className="text-green-500 ml-2">{item.status}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Card = ({ title, value }) => {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
      <p className="text-gray-400">{title}</p>

      <h2 className="text-4xl font-bold mt-3 text-red-600">{value}</h2>
    </div>
  );
};

export default AdminDashboard;
