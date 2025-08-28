 import React from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import "../styles/ContactSupport.css";
import contactImage from "../assets/contact-image.png"; // import the image

const ContactSupport = () => {
  return (
    <section id="contact" className="contact-support">
      <div className="contact-card">
        <h2>Contact & Support</h2>
        <h3>Need Help or Have Questions?</h3>
        <p>
          Reach out to our support team for assistance, feedback, or inquiries.
        </p>

        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <div>
            <strong>Email</strong>
            <p>Info@sacredconnect.org</p>
          </div>
        </div>

        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <div>
            <strong>Phone</strong>
            <p>+91 8123639615</p>
          </div>
        </div>
      </div>

      <div className="contact-image">
        <img
          src={contactImage}
          alt="Contact Support"
        />
      </div>
    </section>
  );
};

export default ContactSupport;
