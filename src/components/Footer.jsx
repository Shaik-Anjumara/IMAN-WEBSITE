import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/eula">EULA</a>
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-of-use">Terms of Use</a>
      </div>
      <p className="footer-copy">
        Copyright © {new Date().getFullYear()} Iman India. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
