 import React from "react";
import aboutusImage from "../assets/aboutus.png";  
import "../styles/AboutApp.css";

const AboutUs = () => {
  return (
    <section id="about-us" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-bold text-center text-[#b33a3a] mb-10">About Us</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-[#b33a3a] mb-4">
               Uniting Souls Through Faith and Innovation

            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              At <span className="font-semibold"> Iman India</span>,  we believe that faith should be inspiring, inclusive, and within everyone’s reach — wherever life takes you. Our mission is to harness the power of technology to nurture a deeper connection with God, strengthen values, and unite believers across the nation and beyond.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Born from a vision to support individuals who may not always have access to physical places of worship, Iman India offers a vibrant digital space to enrich your spiritual journey. Through our platform, users can explore daily Islamic reminders, read and reflect on the Qur’an, listen to soulful naats and nasheeds, engage in Islamic knowledge quizzes, and stay updated with community news and events — all from the comfort of their mobile devices.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src={aboutusImage}
              alt="Iman India"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
