import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { loginUser } from "../../api/auth.api";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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

      const response = await loginUser(formData);

      const { token, user } = response.data;

      localStorage.setItem("token", token);

      localStorage.setItem("user", JSON.stringify(user));

      if (user.role === "ADMIN") {
        navigate("/admin/dashboard");
      } else {
        navigate("/dashboard");
      }
    } catch (error) {
      setError(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-6">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-white">
        <h1 className="text-4xl font-bold text-center">Welcome Back</h1>

        <p className="text-gray-300 text-center mt-3">
          Login to continue your fitness journey
        </p>

        {error && (
          <p className="mt-5 bg-red-500/20 text-red-400 p-3 rounded-lg">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-black/40 border border-gray-600"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-black/40 border border-gray-600"
          />

          <button
            disabled={loading}
            className="w-full bg-white text-black py-3 rounded-xl font-semibold"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="mt-6 text-center text-gray-300">
          Don't have an account?
          <Link to="/signup" className="text-white font-semibold ml-2">
            Join Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
