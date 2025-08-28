 import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToApp = (e) => {
    e.preventDefault();
    const target = document.getElementById("get-the-app-now");
    if (target) target.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {/* Left Links */}
      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <a href="#aboutus" onClick={() => setMenuOpen(false)}>About Us</a>
        <a href="#aboutapp" onClick={() => setMenuOpen(false)}>About the App</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact & Support</a>
      </div>

      {/* Center Logo */}
      <div className="navbar-center">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </div>

      {/* Right Section */}
      <div className="navbar-right">
        <button className="navbar-btn" onClick={handleScrollToApp}>
          Get The App Now
        </button>
        <div className="navbar-socials">
          <a href="https://facebook.com/@ImanIndia" target="_blank" rel="noreferrer"><FaFacebookF /></a>
          <a href="https://twitter.com/@ImanIndiaOrg" target="_blank" rel="noreferrer"><FaXTwitter /></a>
          <a href="https://youtube.com/@ImanIndiaOfficial" target="_blank" rel="noreferrer"><FaYoutube /></a>
          <a href="https://instagram.com/@ImanIndiaOfficial" target="_blank" rel="noreferrer"><FaInstagram /></a>
        </div>
      </div>

      {/* Hamburger (last element) */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
