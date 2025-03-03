import React, { useState, useEffect } from "react";

const WebSocketChat = () => {
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const ws = new WebSocket("wss://echo.websocket.org"); // Example WebSocket server
    setSocket(ws);

    ws.onmessage = (event) => {
      setMessages((prevMessages) => [...prevMessages, event.data]);
    };

    return () => ws.close(); // Cleanup on unmount
  }, []);

  const sendMessage = () => {
    if (socket) {
      socket.send("Hello from React!");
    }
  };

  return (
    <div>
      <h2>WebSocket Chat Example</h2>
      <button onClick={sendMessage}>Send Message</button>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  );
};

export default WebSocketChat;
