import React, { useState } from "react";
import sunIcon from "../../assets/sun.svg"; // Light mode icon
import moonIcon from "../../assets/moon.svg"; // Dark mode icon

const ToggleTheme = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      style={{
        width: "215vh",
        background: darkMode ? "#000" : "#fff",
        color: darkMode ? "#fff" : "#000",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}>
      <h2>{darkMode ? "Dark Mode" : "Light Mode"}</h2>
      <button
        onClick={toggleTheme}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "10px",
        }}>
        <img
          src={darkMode ? sunIcon : moonIcon}
          alt="Toggle Theme"
          width="30"
        />
      </button>
    </div>
  );
};

export default ToggleTheme;
