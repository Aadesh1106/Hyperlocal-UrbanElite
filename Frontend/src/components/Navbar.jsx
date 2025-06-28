// src/components/Navbar.jsx
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FiLogOut } from "react-icons/fi";
import { FaUserCircle, FaTools, FaHome } from "react-icons/fa";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="sticky top-0 z-30 bg-black/90 shadow-xl rounded-2xl px-10 py-4 mt-4 mb-8 mx-auto max-w-6xl flex justify-between items-center border border-yellow-400 backdrop-blur-lg transition-all">
      <Link to="/" className="flex items-center gap-3 text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-600 drop-shadow-lg">
        <FaHome className="text-yellow-400 text-4xl" />
        <span>UrbanElite</span>
      </Link>
      <div className="flex gap-6 items-center text-md font-semibold">
        <Link to="/services" className="text-yellow-100 hover:text-yellow-400 px-3 py-2 rounded-xl hover:bg-yellow-900/20 transition-colors">Services</Link>
        {user?.role === "user" && (
          <>
            <Link to="/booking" className="text-yellow-100 hover:text-yellow-400 px-3 py-2 rounded-xl hover:bg-yellow-900/20 transition-colors">Book</Link>
            <Link to="/review" className="text-yellow-100 hover:text-yellow-400 px-3 py-2 rounded-xl hover:bg-yellow-900/20 transition-colors">Feedback</Link>
            <Link to="/user" className="text-yellow-100 hover:text-yellow-400 px-3 py-2 rounded-xl hover:bg-yellow-900/20 transition-colors">My Panel</Link>
          </>
        )}
        {user?.role === "provider" && (
          <Link to="/provider" className="text-yellow-100 hover:text-yellow-400 px-3 py-2 rounded-xl hover:bg-yellow-900/20 transition-colors">Provider Panel</Link>
        )}
        {user?.role === "admin" && (
          <Link to="/admin" className="text-yellow-100 hover:text-yellow-400 px-3 py-2 rounded-xl hover:bg-yellow-900/20 transition-colors">Admin Panel</Link>
        )}
        {!user ? (
          <>
            <Link to="/login" className="text-yellow-100 hover:text-yellow-400 px-3 py-2 rounded-xl hover:bg-yellow-900/20 transition-colors">Login</Link>
            <Link to="/register" className="text-yellow-100 hover:text-yellow-400 px-3 py-2 rounded-xl hover:bg-yellow-900/20 transition-colors">Sign Up</Link>
          </>
        ) : (
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-yellow-900 hover:text-black border border-yellow-400 px-5 py-2 rounded-full bg-yellow-100 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-600 transition-all shadow-md"
          >
            <FiLogOut />
            Logout
          </button>
        )}
        {user && (
          <span className="ml-4 flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-yellow-900/40 to-yellow-800/20 rounded-full text-yellow-300 font-bold text-sm shadow-sm">
            <FaUserCircle className="text-yellow-400 text-lg" />
            {user.name || user.username}
          </span>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
