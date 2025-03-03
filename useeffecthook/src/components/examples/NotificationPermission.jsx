import React, { useState, useEffect } from "react";

const NotificationPermission = () => {
  const [permission, setPermission] = useState("default");

  useEffect(() => {
    if ("Notification" in window) {
      setPermission(Notification.permission);
    }
  }, []);

  const requestPermission = () => {
    Notification.requestPermission().then((perm) => setPermission(perm));
  };

  return (
    <div>
      <h2>Notification Permission</h2>
      <p>Status: {permission}</p>
      {permission === "default" && (
        <button onClick={requestPermission}>Request Permission</button>
      )}
    </div>
  );
};

export default NotificationPermission;
