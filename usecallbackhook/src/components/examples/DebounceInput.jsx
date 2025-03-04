import React, { useState, useCallback } from "react";

const DebounceInput = () => {
  const [text, setText] = useState("");

  const handleInput = useCallback((e) => {
    setTimeout(() => {
      setText(e.target.value);
    }, 500); // Debounce logic
  }, []);

  return (
    <div>
      <input
        type="text"
        onChange={handleInput}
        placeholder="Type something..."
      />
      <p>Value: {text}</p>
    </div>
  );
};

export default DebounceInput;
