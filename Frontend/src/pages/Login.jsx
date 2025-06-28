import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import api from "../utils/api";
import { FaUserAlt, FaLock } from "react-icons/fa";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", { username, password });
      const { user, token } = res.data;

      localStorage.setItem("token", token);
      login(user);

      switch (user.role) {
        case "admin":
          navigate("/admin");
          break;
        case "provider":
          navigate("/provider");
          break;
        case "user":
          navigate("/user");
          break;
        default:
          navigate("/");
      }
    } catch (err) {
      alert("Login failed: " + (err.response?.data?.message || "Server error"));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-yellow-900 px-4">
      <form onSubmit={handleSubmit} className="bg-zinc-900/90 backdrop-blur-lg p-10 rounded-3xl shadow-2xl w-full max-w-md border border-yellow-700">
        <h2 className="text-4xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-600 drop-shadow-lg">
          Welcome to UrbanElite
        </h2>

        <div className="mb-5 flex items-center border border-yellow-700 rounded-xl px-4 py-3 bg-black/60 shadow-sm">
          <FaUserAlt className="text-yellow-400 mr-3 text-lg" />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full bg-transparent focus:outline-none text-lg text-yellow-100"
            required
          />
        </div>

        <div className="mb-8 flex items-center border border-yellow-700 rounded-xl px-4 py-3 bg-black/60 shadow-sm">
          <FaLock className="text-yellow-400 mr-3 text-lg" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-transparent focus:outline-none text-lg text-yellow-100"
            required
          />
        </div>

        <button className="w-full bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-300 text-black py-3 rounded-xl hover:from-yellow-500 hover:to-yellow-700 transition font-bold text-lg shadow-md">
          Sign In
        </button>

        <p className="text-center text-md mt-6 text-yellow-200">
          New to UrbanElite?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-yellow-400 hover:underline cursor-pointer font-semibold"
          >
            Create Account
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
