 import React, { useEffect, useState } from "react";
import "../styles/Cursor.css";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const moveHandler = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Add sparkles
      const sparkle = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };
      setSparkles((prev) => [...prev.slice(-10), sparkle]); // keep last 10
    };

    window.addEventListener("mousemove", moveHandler);
    return () => window.removeEventListener("mousemove", moveHandler);
  }, []);

  return (
    <>
      {/* Main Neon Cursor */}
      <div
        className="custom-cursor"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      ></div>

      {/* Sparkles */}
      {sparkles.map((s) => (
        <span
          key={s.id}
          className="cursor-sparkle"
          style={{ left: `${s.x}px`, top: `${s.y}px` }}
        />
      ))}
    </>
  );
};

export default Cursor;
