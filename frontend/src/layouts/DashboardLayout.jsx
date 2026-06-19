import { Outlet } from "react-router-dom";

import Sidebar from "../components/dashboard/Sidebar";

import DashboardHeader from "../components/dashboard/DashboardHeader";

import { useSelector } from "react-redux";

const DashboardLayout = () => {
  const isOpen = useSelector((state) => state.sidebar.isOpen);

  return (
    <div className="min-h-screen bg-black">
      <Sidebar />

      <div
        className={`
transition-all
duration-300

${isOpen ? "ml-64" : "ml-20"}

`}
      >
        <DashboardHeader />

        <main className="p-6 text-white">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
