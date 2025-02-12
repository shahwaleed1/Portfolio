import React from "react";
import "./Footer.css"; // Import the CSS file for styling
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <p>&copy; 2024 Waleed Shah. All Rights Reserved.</p>
        </div>
        <div className="footer-center">
          <div className="social-icons">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithub />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaTwitter />
            </a>
            <a href="mailto:waleeddev4@gmail.com" className="social-icon">
              <FaEnvelope />
            </a>
          </div>
        </div>
        <div className="footer-right">
          <p><a href="#contact">Contact Me</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;