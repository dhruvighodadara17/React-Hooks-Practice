import React, { useState, useMemo } from "react";

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(false);

  const themeStyles = useMemo(
    () => ({
      backgroundColor: darkMode ? "#333" : "#fff",
      color: darkMode ? "#fff" : "#000",
      padding: "20px",
    }),
    [darkMode]
  );

  return (
    <div style={themeStyles}>
      <h2>Theme Mode: {darkMode ? "Dark" : "Light"}</h2>
      <button onClick={() => setDarkMode(!darkMode)}>Toggle Theme</button>
    </div>
  );
};

export default ThemeSwitcher;
