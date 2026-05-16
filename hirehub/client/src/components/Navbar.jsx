import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="bg-gray-900 border-b border-purple-900 px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-purple-400 font-bold text-xl">
        HireMe
      </Link>
      <div className="flex gap-6">
        <Link to="/jobs" className="text-gray-300 hover:text-purple-400">
          Jobs
        </Link>
        {user ? (
          <>
            <Link
              to="/dashboard"
              className="text-gray-300 hover:text-purple-400"
            >
              Dashboard
            </Link>
            <button
              onClick={() => {
                logout();
                navigate("/");
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-gray-300 hover:text-purple-400">
              Login
            </Link>
            <Link to="/signup" className="text-gray-300 hover:text-purple-400">
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
