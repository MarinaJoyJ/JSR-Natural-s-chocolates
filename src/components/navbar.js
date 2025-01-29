// components/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <nav className="header">
      <img src="https://images.jdmagicbox.com/comp/kodaikanal/f4/9999p4542.4542.181114100234.w9f4/catalogue/jsr-naturals-oils-and-spices-kodaikanal-ho-kodaikanal-oil-dealers-48le23zj44.jpg" alt="logo" className="logo"></img>
      <h1 className="name">JSR Natural's</h1>
      <button className="hamburger" onClick={toggleMenu}>☰</button>
      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
        <li><Link to="/chocolates" onClick={() => setIsMenuOpen(false)}>Chocolates</Link></li>
        <li><Link to="/other-items" onClick={() => setIsMenuOpen(false)}>Other Items</Link></li>
        <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
        <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
        <li><Link to="/cart" onClick={() => setIsMenuOpen(false)}>Cart</Link></li>

      </ul>
    </nav>
  );
};

export default Navbar;
