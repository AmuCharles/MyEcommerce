// Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Navbar.css";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="Navbar">
      <div className="Navbar-container">
        {/* Brand / Logo */}
        <Link to="/" className="Navbar-brand" onClick={closeMenu}>
          ShopHub
        </Link>

        {/* Hamburger icon (visible only on mobile) */}
        <button 
          className="mobile-menu-toggle" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="hamburger-icon">☰</span>
        </button>

        {/* Collapsible menu – contains links + auth */}
        <div className={`Navbar-menu ${menuOpen ? "open" : ""}`}>
          <div className="Navbar-links">
            <Link to="/" className="Navbar-link" onClick={closeMenu}>
              Home
            </Link>
            <Link to="/checkout" className="Navbar-link" onClick={closeMenu}>
              Cart
            </Link>
          </div>

          <div className="navbar-auth">
            {!user ? (
              <div className="navbar-auth-links">
                <Link to="/Auth" className="btn btn-secondary" onClick={closeMenu}>
                  Login
                </Link>
                <Link to="/Auth" className="btn btn-primary" onClick={closeMenu}>
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
      </div>
    </nav>
  );
}