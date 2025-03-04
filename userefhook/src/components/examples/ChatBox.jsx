import { useRef, useEffect } from "react";

function ChatBox({ messages }) {
  const chatRef = useRef(null);

  useEffect(() => {
    chatRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div
      style={{
        height: "200px",
        overflowY: "auto",
        backgroundColor: "lightgreen",
      }}>
      {messages.map((msg, i) => (
        <p key={i}>{msg}</p>
      ))}
      <div ref={chatRef} />
    </div>
  );
}

export default ChatBox;
