 import React from "react";
import "../styles/HeroSection.css";
import heroImg from "../assets/hero-image.png";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h1 className="hero-title">Iman: Your Islamic Spiritual Hub</h1>
          <p className="hero-subtitle">
            Strengthen your faith with prayer, Qur'an, and community
          </p>
        </div>
        <div className="hero-image">
          <img src={heroImg} alt="Iman App Preview" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
