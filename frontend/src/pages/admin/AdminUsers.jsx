import { useEffect, useState } from "react";

import { getAllUsers } from "../../api/admin.api";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const data = await getAllUsers();

      setUsers(data.users);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading Users...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Manage Users</h1>

      <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden">
        <table className="w-full">
          <thead className="bg-black">
            <tr>
              <th className="p-4 text-left">Name</th>

              <th className="p-4 text-left">Email</th>

              <th className="p-4 text-left">Role</th>

              <th className="p-4 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="border-t border-gray-800">
                <td className="p-4">{user.name}</td>

                <td className="p-4 text-gray-400">{user.email}</td>

                <td className="p-4">
                  <span className="bg-red-600 px-3 py-1 rounded-full text-sm">
                    {user.role}
                  </span>
                </td>

                <td className="p-4">
                  <span className="text-green-500">Verified</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUsers;
