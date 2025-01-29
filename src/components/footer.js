import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
      
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/chocolates">Chocolates</Link></li>
            <li><Link to="/other-items">Other Items</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: jsr.naturals@gmail.com</p>
          <p>Phone: 9789303114</p>
          <p>Main Boat House, No1, Lake Rd, opp. TTDC, Kodaikanal, Tamil Nadu 624101</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} JSR Natural's. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
