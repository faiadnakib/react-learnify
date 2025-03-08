import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext"; // Import your AuthContext
import "./Navbar.css";
import { Menu, X, Sun, Moon, User } from "lucide-react"; // Icons

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuthContext(); // Use the AuthContext to get user and logout

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode");
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Handle logout
  const handleLogout = () => {
    logout(); // Call logout from context
  };

  return (
    <header className={`navbar ${isDarkMode ? "dark-mode" : ""}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/" className="logo-text">
            Learnify
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navbar Links */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link to="/" className="nav-link" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/book" className="nav-link" onClick={toggleMenu}>
            Books
          </Link>
          <Link to="/pdf" className="nav-link" onClick={toggleMenu}>
            PDFs
          </Link>
          <Link to="/about" className="nav-link" onClick={toggleMenu}>
            About Us
          </Link>
        </nav>

        {/* Search Bar */}
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button type="button">🔍</button>
        </div>

        {/* Auth Buttons */}
        <div className="auth-buttons">
          {user ? (
            <div className="auth-logged-in">
              {/* Profile and Logout */}
              <Link to="/profile" className="auth-button">
                Profile
              </Link>
              <button onClick={handleLogout} className="auth-button">
                Log Out
              </button>
            </div>
          ) : (
            <div className="auth-not-logged-in">
              {/* Login and Signup */}
              <Link to="/login" className="auth-button">
                Log In
              </Link>
              <Link to="/signup" className="auth-button">
                Sign Up
              </Link>
            </div>
          )}
        </div>

        {/* Dark Mode Toggle */}
        <div className="dark-mode-switch" onClick={toggleDarkMode}>
          {isDarkMode ? <Sun size={22} /> : <Moon size={22} />}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
