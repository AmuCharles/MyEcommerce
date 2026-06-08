import { Link } from "react-router-dom";
import { useAuth} from "../context/AuthContext";



export default function Navbar() {
  const { user, logout } = useAuth();
  return (
    <nav className="Navbar">
      <div className="Navbar-container">
        <Link to="/" className="Navbar-brand">
          ShopHub
        </Link>
        <div className="Navbar-links">
          <Link to="/" className="Navbar-link">
            Home
          </Link>
          <Link to="/checkout" className="Navbar-link">
            Cart
          </Link>
          
        </div>
        <div className="navbar-auth">
          {!user ? (
            <div className="navbar-auth-links">
              <Link to="/auth" className="btn btn-secondary">
                Login
              </Link>
              <Link to="/auth" className="btn btn-primary">
                Signup
              </Link>
            </div>
          ) : (
            <div className="navbar-user">
              <span className="navbar-greeting">Hello, {user.email}</span>
              <button className="btn btn-secondary" onClick={logout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}