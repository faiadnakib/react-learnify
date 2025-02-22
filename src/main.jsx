import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/home.jsx";
import Books from "./Pages/book.jsx";
import PDF from "./Pages/pdf.jsx";
import About from "./Pages/about.jsx";
import Login from "./Pages/login.jsx";
import SignUp from "./Pages/signup.jsx";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Books />} />
        <Route path="/pdf" element={<PDF />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
