import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="flex justify-between items-center p-4 bg-orange-100 shadow">
      <h1 className="text-xl font-bold text-orange-600">Lokrang</h1>
      <div>
        {user ? (
          <>
            <span className="mr-3">Hi, {user.name}</span>
            <button onClick={logout} className="text-red-500 font-medium">Logout</button>
          </>
        ) : (
          <>
            <Link to="/" className="mr-4">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
}
