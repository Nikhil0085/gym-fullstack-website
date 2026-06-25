import { Outlet } from "react-router-dom";

import AdminSidebar from "../components/AdminSidebar";

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <AdminSidebar />

      <main className="ml-64 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
