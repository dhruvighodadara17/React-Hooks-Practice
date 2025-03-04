import React, { useState, useCallback } from "react";

const ChatApp = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]); // Store chat history

  const sendMessage = useCallback(() => {
    if (message.trim() === "") return; // Prevent empty messages
    setMessages((prevMessages) => [...prevMessages, message]); // Add message to list
    setMessage(""); // Clear input after sending
  }, [message]);

  return (
    <div>
      <h2>Chat App</h2>
      <input
        type="text"
        value={message} // Controlled input
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={sendMessage}>Send</button>

      <ul>
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </ul>
    </div>
  );
};

export default ChatApp;
