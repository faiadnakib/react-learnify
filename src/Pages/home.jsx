import React, { useState } from "react";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import "./home.css";

const Home = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  return (
    <>
      {/* Navbar is always present */}
      <Navbar />

      {/* Content Wrapper */}
      <div className="content">
        <div className="hero">
          <h1>Skills that drive you forward</h1>
          <p>
            Technology and the world of work change fast. With us, you're
            faster. Get the skills to achieve goals and stay competitive.
          </p>
          <div className="hero-buttons">
            <button>Plan for individuals</button>
            <button>Plan for organizations</button>
          </div>
        </div>

        <div className="skill-categories">
          <div
            className="skill-category"
            onClick={() => handleCategoryClick("data-science")}
          >
            Data Science
          </div>
          <div
            className={`category-details ${
              activeCategory === "data-science" ? "show" : ""
            }`}
          >
            <p>
              Learn the fundamentals of data analysis, machine learning, and
              more!
            </p>
          </div>

          <div
            className="skill-category"
            onClick={() => handleCategoryClick("it-certifications")}
          >
            IT Certifications
          </div>
          <div
            className={`category-details ${
              activeCategory === "it-certifications" ? "show" : ""
            }`}
          >
            <p>
              Explore the top IT certifications that will boost your career!
            </p>
          </div>
        </div>

        <div className="popular-topics">
          <div
            className="popular-topic"
            onClick={() => handleCategoryClick("chatgpt")}
          >
            ChatGPT
          </div>
          <div
            className={`category-details ${
              activeCategory === "chatgpt" ? "show" : ""
            }`}
          >
            <p>
              Learn how to leverage ChatGPT for various tasks, from coding to
              conversation!
            </p>
          </div>

          <div
            className="popular-topic"
            onClick={() => handleCategoryClick("python")}
          >
            Python
          </div>
          <div
            className={`category-details ${
              activeCategory === "python" ? "show" : ""
            }`}
          >
            <p>
              Get started with Python programming, from basic syntax to advanced
              techniques!
            </p>
          </div>
        </div>

        <div className="statistics">
          <div className="statistic">
            <strong>4M+</strong> learners
          </div>
          <div className="statistic">
            <strong>11M+</strong> learners
          </div>
        </div>
      </div>

      {/* Footer is always at the bottom */}
      <Footer />
    </>
  );
};

export default Home;
