import { NavLink } from "react-router-dom";

import {
  FaHome,
  FaUser,
  FaDumbbell,
  FaAppleAlt,
  FaHistory,
  FaIdCard,
  FaChartLine,
  FaSignOutAlt,
} from "react-icons/fa";

import { useSelector } from "react-redux";

const Sidebar = () => {
  const isOpen = useSelector((state) => state.sidebar.isOpen);

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <FaHome />,
    },
    {
      name: "Profile",
      path: "/dashboard/profile",
      icon: <FaUser />,
    },
    {
      name: "Membership",
      path: "/dashboard/membership",
      icon: <FaIdCard />,
    },
    {
      name: "Workout",
      path: "/dashboard/workout",
      icon: <FaDumbbell />,
    },
    {
      name: "Diet Plan",
      path: "/dashboard/diet",
      icon: <FaAppleAlt />,
    },
    {
      name: "Progress",
      path: "/dashboard/progress",
      icon: <FaChartLine />,
    },
    {
      name: "Membership History",
      path: "/dashboard/history",
      icon: <FaHistory />,
    },
  ];

  return (
    <aside
      className={`fixed top-0 left-0 h-screen bg-black text-white border-r border-gray-800 transition-all duration-300 z-50 ${isOpen ? "w-64" : "w-20"}`}
    >
      <div className="h-20 flex items-center justify-center border-b border-gray-800">
        {isOpen ? (
          <h1 className="text-2xl font-bold text-red-600">GymPro</h1>
        ) : (
          <h1 className="text-xl font-bold text-red-600">G</h1>
        )}
      </div>

      <nav className="px-3 mt-6 space-y-3">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-3 rounded-xl transition duration-300 ${isActive ? "bg-red-600 text-white" : "text-gray-300 hover:bg-gray-800 hover:text-white"}`
            }
          >
            <span className="text-xl">{item.icon}</span>

            {isOpen && <span className="font-medium">{item.name}</span>}
          </NavLink>
        ))}
      </nav>

      <div className="absolute bottom-6 w-full px-3">
        <button className="flex items-center gap-4 px-4 py-3 w-full rounded-xl text-gray-300 hover:bg-red-600 hover:text-white transition">
          <FaSignOutAlt className="text-xl" />

          {isOpen && <span className="font-medium">Logout</span>}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
