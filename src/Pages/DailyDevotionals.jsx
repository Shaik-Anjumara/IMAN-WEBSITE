import React, { useState } from "react";
import "../styles/DailyDevotionals.css";

const DailyDevotionals = () => {
  // Example verses (you can replace or fetch from API later)
  const verses = [
    { id: 1, text: "Indeed, Allah is with the patient. (Quran 2:153)" },
    { id: 2, text: "And He found you lost and guided you. (Quran 93:7)" },
    { id: 3, text: "So remember Me; I will remember you. (Quran 2:152)" },
    { id: 4, text: "Do not despair of the mercy of Allah. (Quran 39:53)" },
  ];

  const [currentVerse, setCurrentVerse] = useState(0);

  const nextVerse = () => {
    setCurrentVerse((prev) => (prev + 1) % verses.length);
  };

  return (
    <div className="devotionals-container">
      <h1 className="title">Daily Devotionals</h1>
      <div className="verse-card">
        <p>{verses[currentVerse].text}</p>
        <button onClick={nextVerse} className="next-btn">Next Verse</button>
      </div>
    </div>
  );
};

export default DailyDevotionals;
