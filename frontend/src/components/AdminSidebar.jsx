import { NavLink } from "react-router-dom";

import {
  FaHome,
  FaDumbbell,
  FaAppleAlt,
  FaIdCard,
  FaUsers,
  FaUserCheck
} from "react-icons/fa";

const AdminSidebar = () => {
  const menuItems = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: <FaHome />,
    },

    {
      name: "Membership",
      path: "/admin/membership",
      icon: <FaIdCard />,
    },

    {
      name: "Workout",
      path: "/admin/workout",
      icon: <FaDumbbell />,
    },

    {
      name: "Diet Plan",
      path: "/admin/diet",
      icon: <FaAppleAlt />,
    },

    {
      name: "Users",
      path: "/admin/users",
      icon: <FaUsers />,
    },
    {
      name: "Assign Plans",
      path: "/admin/assign",
      icon: <FaUserCheck />,
    }
  ];

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-black text-white border-r border-gray-800 z-50">
      <div className="h-20 flex items-center justify-center border-b border-gray-800">
        <h1 className="text-2xl font-bold text-red-600">GymPro Admin</h1>
      </div>

      <nav className="p-4 space-y-3">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-3 rounded-xl transition ${
                isActive ? "bg-red-600" : "hover:bg-gray-800"
              }`
            }
          >
            <span className="text-xl">{item.icon}</span>

            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default AdminSidebar;
