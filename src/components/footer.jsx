import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Top Section */}
        <div className="footer-top">
          <div className="footer-logo">Learnify</div>
          <p className="footer-description">
            Your gateway to mastering technical skills and advancing your
            career.
          </p>
          <div className="social-icons">
            <a href="#" className="social-link">
              <FaFacebook />
            </a>
            <a href="#" className="social-link">
              <FaTwitter />
            </a>
            <a href="#" className="social-link">
              <FaLinkedin />
            </a>
            <a href="#" className="social-link">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="footer-links">
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Courses</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Contact Us</h4>
            <p>Email: support@learnify.com</p>
            <p>Phone: +1 234 567 890</p>
            <p>Address: 123 Learnify St, Tech City</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Learnify. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
