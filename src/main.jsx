import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import Home from "./pages/home";
import Books from "./Pages/book.jsx";
import PDF from "./Pages/pdf.jsx";
import About from "./Pages/about.jsx";
import Login from "./Pages/login.jsx";
import SignUp from "./Pages/signup.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Books />} />
        <Route path="/pdf" element={<PDF />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
