import React from "react";
import Navbar from "../components/footer";
import Footer from "../components/navbar";
import "./about.css"; // Import the custom CSS

const About = () => {
  return (
    <div className="about-page">
      <section className="about-us">
        <h2>About Us</h2>
        <p>
          Welcome to Learnify, where we strive to offer the best learning
          resources.
        </p>

        <div className="team-container">
          {/* Sample Team Members */}
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member" />
            <h3>Faiad Nakib</h3>
            <p>Founder & CEO</p>
            <div className="social-links">
              <a href="#">LinkedIn</a>
              <a href="#">Twitter</a>
            </div>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member" />
            <h3>Jabin Tasnim</h3>
            <p>Co-Founder & CTO</p>
            <div className="social-links">
              <a href="#">LinkedIn</a>
              <a href="#">Instagram</a>
            </div>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member" />
            <h3>Ridwan Nafi</h3>
            <p>Co-Founder & CTO</p>
            <div className="social-links">
              <a href="#">LinkedIn</a>
              <a href="#">Instagram</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
