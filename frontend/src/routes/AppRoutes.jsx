import { BrowserRouter, Routes, Route } from "react-router-dom";

import PublicLayout from "../layouts/PublicLayout";

import Home from "../pages/public/Home";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import VerifyOTP from "../pages/auth/VerifyOTP";
import Membership from "../pages/public/MembershipPlans"
import MembershipDetails from "../pages/public/MembershipDetails";
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />
          <Route path="/verify-otp" element={<VerifyOTP />} />

          <Route path="/signup" element={<Signup />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/membership/:id" element={<MembershipDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
