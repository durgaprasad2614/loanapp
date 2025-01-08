import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="container">
        <div className="row">
          {/* Quick Links */}
          <div className="col-lg-4 col-md-6 col-sm-12 footer-section">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              <li>
                <a href="#home" className="footer-link">Home</a>
              </li>
              <li>
                <a href="#about" className="footer-link">About Us</a>
              </li>
              <li>
                <a href="#services" className="footer-link">Services</a>
              </li>
              <li>
                <a href="#contact" className="footer-link">Contact</a>
              </li>
            </ul>
          </div>

          {/* Search Field */}
          <div className="col-lg-4 col-md-6 col-sm-12 footer-section text-center">
            <h5 className="footer-title">Search</h5>
            <div className="footer-search">
              <input
                type="text"
                className="footer-input"
                placeholder="Search..."
                aria-label="Search"
              />
              <button className="footer-button">Search</button>
            </div>
          </div>

          {/* Social Icons */}
          <div className="col-lg-4 col-md-12 col-sm-12 footer-section text-center text-lg-end">
            <h5 className="footer-title">Follow Us</h5>
            <div className="footer-icons">
              <a href="#" className="footer-icon"><i className="bi bi-facebook"></i></a>
              <a href="#" className="footer-icon"><i className="bi bi-twitter"></i></a>
              <a href="#" className="footer-icon"><i className="bi bi-instagram"></i></a>
              <a href="#" className="footer-icon"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom text-center">
          <p>&copy; 2025 Loan Prediction App. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
