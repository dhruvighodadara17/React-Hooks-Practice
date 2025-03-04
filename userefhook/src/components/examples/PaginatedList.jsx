import React, { useState, useCallback } from "react";

const ChatApp = () => {
  const [message, setMessage] = useState("");

  const sendMessage = useCallback(() => {
    console.log("Message sent:", message);
  }, [message]);

  return (
    <div>
      <input type="text" onChange={(e) => setMessage(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatApp;
