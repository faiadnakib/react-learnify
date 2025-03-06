import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Welcome to your Dashboard</h2>
        <p>This is a secure area, only visible to logged-in users.</p>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
