 import {
  FaBookOpen,
  FaMusic,
  FaGamepad,
  FaCalendarAlt,
  FaUsers,
  FaQuran,
} from "react-icons/fa";
import { Link } from "react-router-dom";
 
import "../styles/AboutApp.css";
const AboutApp = () => {
  return (
    <section id="aboutapp">
      <div className="max-w-6xl mx-auto px-8 py-10 bg-[#f8d6b0] rounded-[40px] shadow-lg">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-[#5a2d0c] mb-4">
          About the App
        </h2>

        {/* Description */}
        <p className="text-center text-lg text-gray-800 max-w-3xl mx-auto mb-10">
          The Iman App is designed to strengthen your faith and keep you
          connected through Quran, Islamic reminders, events, and more —
          anytime, anywhere.
        </p>

        {/* Key Features */}
        <h3 className="text-2xl font-semibold text-center text-[#5a2d0c] mb-8">
          Key Features
        </h3>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-12 text-center">
          {/* Card 1 */}

         <Link to="/devotionals" className="flex flex-col items-center hover:scale-105 transition">
            <FaBookOpen className="text-5xl text-[#b33a3a] mb-4" />
            <h4 className="font-bold text-lg">Daily Devotionals</h4>
            <p>Start each day with curated verses.</p>
          </Link>

          {/* Card 2 */}
          <Link to="/quran" className="flex flex-col items-center hover:scale-105 transition">
            <FaQuran className="text-5xl text-[#b33a3a] mb-4" />
            <h4 className="font-bold text-lg">Quran Access</h4>
            <p>Read and study the Quran in multiple languages.</p>
          </Link>

          {/* Card 3 */}
          <Link to="/nasheeds" className="flex flex-col items-center hover:scale-105 transition">
            <FaMusic className="text-5xl text-[#b33a3a] mb-4" />
            <h4 className="font-bold text-lg">Nasheeds</h4>
            <p>Listen to Islamic songs & recitations.</p>
          </Link>

          {/* Card 4 (Games & Quiz → separate page) */}
          <Link to="/games" className="flex flex-col items-center hover:scale-105 transition">
            <FaGamepad className="text-5xl text-[#b33a3a] mb-4" />
            <h4 className="font-bold text-lg">Games & Quiz</h4>
            <p>Play Islamic quizzes and earn rewards.</p>
          </Link>

          {/* Card 5 */}
          <Link to="/community" className="flex flex-col items-center hover:scale-105 transition">
            <FaUsers className="text-5xl text-[#b33a3a] mb-4" />
            <h4 className="font-bold text-lg">Community News</h4>
            <p>Stay up to date with local events & announcements.</p>
          </Link>

          {/* Card 6 */}
          <Link to="/events" className="flex flex-col items-center hover:scale-105 transition">
            <FaCalendarAlt className="text-5xl text-[#b33a3a] mb-4" />
            <h4 className="font-bold text-lg">Event Calendar</h4>
            <p>Never miss important events or gatherings.</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutApp;
