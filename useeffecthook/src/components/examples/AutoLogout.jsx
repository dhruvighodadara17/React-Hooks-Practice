import React, { useState, useEffect } from "react";

const AutoLogout = () => {
  const [active, setActive] = useState(true);

  useEffect(() => {
    const logoutTimer = setTimeout(() => {
      setActive(false);
      localStorage.removeItem("user");
      alert("Session expired. Logging out...");
    },  5000); // for 5 minutes- 5*60*1000

    const resetTimer = () => {
      clearTimeout(logoutTimer);
    };

    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("keydown", resetTimer);

    return () => {
      clearTimeout(logoutTimer);
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("keydown", resetTimer);
    };
  }, []);

  return <h2>{active ? "User Active 🟢" : "Logged Out 🔴"}</h2>;
};

export default AutoLogout;
