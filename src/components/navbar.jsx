import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/" className="logo-text">
          Learnify <span>{/* Optional: Add a subtle graphic */}</span>
        </Link>
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/book">Books</Link>
        <Link to="/pdf">PDFs</Link>
        <Link to="/about">About Us</Link>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Search for topics..." />
        <button type="button">Search</button>
      </div>
      <div className="auth-buttons">
        <Link to="/login">Log In</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    </header>
  );
};

export default Navbar;
