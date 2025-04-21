import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-gray-100 p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">🩸 Blood Bank</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        {user ? (
          <>
            <Link to="/request">Request</Link>
            <Link to="/donate">Donate</Link>

            <Link
              to="/donors"
              className="px-4 py-2 text-blue-600 hover:underline"
            >
              Donor List
            </Link>

            <Link to="/profile">Profile</Link>
            <span className="text-gray-600">Hi, {user.email}</span>
            <button onClick={logout} className="text-red-600">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/donors"
              className="px-4 py-2 text-blue-600 hover:underline"
            >
              Donor List
            </Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
