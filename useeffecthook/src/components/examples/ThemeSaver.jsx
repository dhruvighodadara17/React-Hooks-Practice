// import React, { useState, useEffect } from "react";

// const ThemeSaver = () => {
//   const [darkMode, setDarkMode] = useState(() => {
//     return localStorage.getItem("darkMode") === "true";
//   });

//   useEffect(() => {
//     localStorage.setItem("darkMode", darkMode);
//     document.body.style.background = darkMode ? "#333" : "#fff";
//     document.body.style.color = darkMode ? "#fff" : "#000";
//   }, [darkMode]);

//   return (
//     <div>
//       <h2>Theme Saver Example</h2>
//       <button onClick={() => setDarkMode(!darkMode)}>
//         {darkMode ? "Light Mode" : "Dark Mode"}
//       </button>
//     </div>
//   );
// };

// export default ThemeSaver;

import React, { useState, useEffect } from "react";

const ThemeSaver = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    document.body.style.background = darkMode ? "#222" : "#fff";
    document.body.style.color = darkMode ? "#fff" : "#000";
  }, [darkMode]);

  return (
    <div>
      <h2>Theme Switcher</h2>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Switch to Light Mode 🌞" : "Switch to Dark Mode 🌙"}
      </button>
    </div>
  );
};

export default ThemeSaver;
