import { BrowserRouter, Routes, Route } from "react-router-dom";

import PublicLayout from "../layouts/PublicLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import Home from "../pages/public/Home";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import VerifyOTP from "../pages/auth/VerifyOTP";

import Membership from "../pages/public/MembershipPlans";
import MembershipDetails from "../pages/public/MembershipDetails";

import Dashboard from "../pages/user/Dashboard";
import Profile from "../pages/user/Profile";
import UserMembership from "../pages/user/UserMembership";
import Workout from "../pages/user/Workout";
import Diet from "../pages/user/Diet";
import History from "../pages/user/History";
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
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
