import React, { useState, useEffect } from "react";

const OnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const updateStatus = () => setIsOnline(navigator.onLine);
    window.addEventListener("online", updateStatus);
    window.addEventListener("offline", updateStatus);

    return () => {
      window.removeEventListener("online", updateStatus);
      window.removeEventListener("offline", updateStatus);
    };
  }, []);

  return (
    <div>
      <h2>Internet Connection Status</h2>
      <p>{isOnline ? "You are Online ✅" : "You are Offline ❌"}</p>
    </div>
  );
};

export default OnlineStatus;
