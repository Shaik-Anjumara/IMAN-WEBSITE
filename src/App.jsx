 // src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import AboutApp from "./components/AboutApp";
import GetTheAppNow from "./components/GetTheAppNow";
import ContactSupport from "./components/ContactSupport";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Cursor from "./components/Cursor";
import NasheedsPage from "./Pages/NasheedsPage";

// Pages
import GamesPage from "./Pages/GamesPage";

function App() {
  return (
    <Router>
      {/* Custom Cursor */}
      <Cursor />

      {/* Navbar */}
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <section id="hero">
                <HeroSection />
              </section>

              <section id="aboutus">
                <AboutUs />
              </section>

              <section id="aboutapp">
                <AboutApp />
              </section>

              <section id="gettheappnow">
                <GetTheAppNow />
              </section>

              <section id="contactsupport">
                <ContactSupport />
              </section>

              {/* Footer + Scroll Button */}
              <Footer /> 
              <ScrollToTopButton />
            </>
          }
        />

        {/* Other Pages */}
        <Route path="/games" element={<GamesPage />} />
        <Route path="/nasheeds" element={<NasheedsPage />} />

      </Routes>
    </Router>
  );
}

export default App;
