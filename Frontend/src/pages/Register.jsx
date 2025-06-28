import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";
import { useAuth } from "../context/AuthContext";
import { FaUserAlt, FaLock, FaEnvelope, FaUserTag } from "react-icons/fa";

const Register = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
    name: "",
    email: "",
    role: "user",
  });

  const [otp, setOtp] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRequestOtp = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/request-otp", form);
      alert("OTP sent to your email");
      setShowOtpInput(true);
    } catch (err) {
      alert("Failed to send OTP: " + err.response?.data?.message);
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const res = await api.post("/auth/verify-otp", {
        email: form.email,
        otp,
      });

      alert("Registration successful");
      navigate("/login");
    } catch (err) {
      alert("OTP verification failed: " + err.response?.data?.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-yellow-900 px-4">
      <form
        onSubmit={handleRequestOtp}
        className="bg-zinc-900/90 p-8 rounded-2xl shadow-2xl w-full max-w-md border border-yellow-700"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-yellow-400">
          Create Your UrbanElite Account
        </h2>

        {!showOtpInput ? (
          <>
            <div className="flex items-center border border-yellow-700 rounded px-3 py-2 mb-3 bg-black/60">
              <FaUserAlt className="text-yellow-400 mr-3" />
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="w-full bg-transparent focus:outline-none text-yellow-100"
                value={form.username}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex items-center border border-yellow-700 rounded px-3 py-2 mb-3 bg-black/60">
              <FaLock className="text-yellow-400 mr-3" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full bg-transparent focus:outline-none text-yellow-100"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex items-center border border-yellow-700 rounded px-3 py-2 mb-3 bg-black/60">
              <FaEnvelope className="text-yellow-400 mr-3" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full bg-transparent focus:outline-none text-yellow-100"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex items-center border border-yellow-700 rounded px-3 py-2 mb-3 bg-black/60">
              <FaUserTag className="text-yellow-400 mr-3" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="w-full bg-transparent focus:outline-none text-yellow-100"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="w-full border border-yellow-700 p-2 mb-6 rounded bg-black/60 text-yellow-100"
            >
              <option value="user">User</option>
              <option value="provider">Provider</option>
            </select>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-300 text-black py-2 rounded hover:from-yellow-500 hover:to-yellow-700 transition font-semibold"
            >
              Send OTP
            </button>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Enter OTP sent to your email"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full border border-yellow-700 p-2 mb-4 rounded bg-black/60 text-yellow-100"
              required
            />

            <button
              type="button"
              onClick={handleVerifyOtp}
              className="w-full bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-300 text-black py-2 rounded hover:from-yellow-500 hover:to-yellow-700 transition font-semibold"
            >
              Verify OTP & Register
            </button>
          </>
        )}

        <p className="text-center text-sm mt-4 text-yellow-200">
          Already a member?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-yellow-400 hover:underline cursor-pointer"
          >
            Sign In
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;
