import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Menu, X, Sun, Moon } from "lucide-react"; // Icons

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode");
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
          <Link to="/login" className="auth-button">
            Log In
          </Link>
          <Link to="/signup" className="auth-button">
            Sign Up
          </Link>
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
