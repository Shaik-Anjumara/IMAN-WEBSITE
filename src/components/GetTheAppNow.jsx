 import React from "react";
import "../styles/GetTheAppNow.css";

const GetTheAppNow = () => {
  return (
    <section id="get-the-app-now" className="get-the-app-now">
      <h2 className="get-the-app-now-title">Get the App Now</h2>
      <p className="get-the-app-now-subtitle">
        Join thousands of your community members who’ve already embraced
        <br /> the power of faith in the digital age.
      </p>
      <div className="get-the-app-now-buttons">
        <a
          href="https://apps.apple.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="store-badge"
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="Download on the App Store"
          />
        </a>
        <a
          href="https://play.google.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="store-badge"
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Get it on Google Play"
          />
        </a>
      </div>
    </section>
  );
};

export default GetTheAppNow;
