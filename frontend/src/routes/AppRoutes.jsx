import { BrowserRouter, Routes, Route } from "react-router-dom";

import PublicLayout from "../layouts/PublicLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import Home from "../pages/public/Home";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import VerifyOTP from "../pages/auth/VerifyOTP";
import About from "../pages/public/About";
import Contact from "../pages/public/Contact";

import Membership from "../pages/public/MembershipPlans";
import MembershipDetails from "../pages/public/MembershipDetails";

import Dashboard from "../pages/user/Dashboard";
import Profile from "../pages/user/Profile";
import UserMembership from "../pages/user/UserMembership";
import Workout from "../pages/user/Workout";
import Diet from "../pages/user/Diet";
import History from "../pages/user/History";
import AdminLayout from "../layouts/AdminLayout";
import AdminDashboard from "../pages/admin/AdminDashboard";
import ManageMembership from "../pages/admin/ManageMembership";
import ManageWorkout from "../pages/admin/ManageWorkout";
import ManageDiet from "../pages/admin/ManageDiet";
import AdminAssign from "../pages/admin/AdminAssign";
import AdminUsers from "../pages/admin/AdminUsers";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLIC WEBSITE */}

        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/verify-otp" element={<VerifyOTP />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/membership/:id" element={<MembershipDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* USER DASHBOARD */}

        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/dashboard/membership" element={<UserMembership />} />
          <Route path="/dashboard/workout" element={<Workout />} />
          <Route path="/dashboard/diet" element={<Diet />} />
          <Route path="/dashboard/history" element={<History />} />
        </Route>

        <Route element={<AdminLayout />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/membership" element={<ManageMembership />} />
          <Route path="/admin/workout" element={<ManageWorkout />} />
          <Route path="/admin/diet" element={<ManageDiet />} />
          <Route path="/admin/assign" element={<AdminAssign />} />
          <Route path="/admin/users" element={<AdminUsers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
