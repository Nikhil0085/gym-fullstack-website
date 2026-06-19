import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { verifyOTP } from "../../api/auth.api";

const VerifyOTP = () => {
  const navigate = useNavigate();

  const [otp, setOtp] = useState("");

  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  const email = localStorage.getItem("verifyEmail");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setLoading(true);
      setError("");

      await verifyOTP({
        email,
        otp,
      });

      localStorage.removeItem("verifyEmail");

      navigate("/login");
    } catch (error) {
      setError(error.response?.data?.message || "OTP verification failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-6">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-white">
        <h1 className="text-4xl font-bold text-center">Verify OTP</h1>

        <p className="text-gray-300 text-center mt-3">
          Enter the OTP sent to your email
        </p>

        {error && (
          <p className="mt-5 bg-red-500/20 text-red-400 p-3 rounded-lg">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-black/40 border border-gray-600 outline-none text-center tracking-widest"
          />

          <button
            disabled={loading}
            className="w-full bg-white text-black py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyOTP;
