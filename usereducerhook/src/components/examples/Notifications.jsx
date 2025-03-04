import React, { useReducer, useEffect } from "react";

const notificationsReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NOTIFICATION":
      return [
        ...state,
        { id: Date.now(), message: action.message, type: action.notifType },
      ];
    case "REMOVE_NOTIFICATION":
      return state.filter((notif) => notif.id !== action.id);
    default:
      return state;
  }
};

const Notifications = () => {
  const [notifications, dispatch] = useReducer(notificationsReducer, []);

  const addNotification = (message, notifType) => {
    const id = Date.now();
    dispatch({ type: "ADD_NOTIFICATION", message, notifType });

    // Auto-remove notification after 3 seconds
    setTimeout(() => dispatch({ type: "REMOVE_NOTIFICATION", id }), 3000);
  };

  return (
    <div>
      <h1>Notifications System</h1>
      <button
        onClick={() => addNotification("Data saved successfully!", "success")}>
        Show Success Notification
      </button>
      <button onClick={() => addNotification("Something went wrong!", "error")}>
        Show Error Notification
      </button>

      <div style={{ position: "absolute", top: 20, right: 20 }}>
        {notifications.map((notif) => (
          <div
            key={notif.id}
            style={{
              padding: "10px",
              margin: "5px",
              background: notif.type === "success" ? "green" : "red",
              color: "#fff",
              borderRadius: "5px",
            }}>
            {notif.message}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
