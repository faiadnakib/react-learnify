import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/home.jsx";
import Books from "./Pages/book.jsx";
import PDF from "./Pages/pdf.jsx";
import About from "./Pages/about.jsx";
import Login from "./Pages/login.jsx";
import SignUp from "./Pages/signup.jsx";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import Dashboard from "./Pages/dashboard.jsx";
import PrivateRoute from "./utils/PrivateRoutes.jsx";
import PublicRoute from "./utils/PublicRoutes.jsx";
import Profile from "./Pages/Profile.jsx";
import Layout from "./Layout";
import Example from "./Pages/Example.jsx";
import "./index.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Home and other public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Books />} />

        <Route path="/about" element={<About />} />
        <Route path="/example" element={<Example />} />

        {/* Layout applied to protected routes */}
        <Route element={<Layout />} path="/">
          <Route element={<PublicRoute />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
          </Route>

          <Route element={<PrivateRoute />}>
            <Route path="profile" element={<Profile />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="/pdf" element={<PDF />} />
          </Route>
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
