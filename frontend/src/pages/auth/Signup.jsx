import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { signupUser } from "../../api/auth.api";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      await signupUser(formData);

      localStorage.setItem("verifyEmail", formData.email);

      navigate("/verify-otp");
    } catch (error) {
      setError(error.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-6">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-white">
        <h1 className="text-4xl font-bold text-center">Create Account</h1>

        <p className="text-gray-300 text-center mt-3">
          Start your fitness journey today
        </p>

        {error && (
          <p className="mt-5 bg-red-500/20 text-red-400 p-3 rounded-lg">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-black/40 border border-gray-600 outline-none focus:border-white"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-black/40 border border-gray-600 outline-none focus:border-white"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-black/40 border border-gray-600 outline-none focus:border-white"
          />

          <button
            disabled={loading}
            className="w-full bg-white text-black py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
          >
            {loading ? "Creating..." : "Create Account"}
          </button>
        </form>

        <p className="mt-6 text-center text-gray-300">
          Already have an account?
          <Link to="/login" className="ml-2 text-white font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
