import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div
      style={{
        // display: "flex",
        textAlign: "center",
        // justifyContent: "center",
        // alignItems: "center",
        width: "215vh",
        height: "90vh",
        // backgroundColor:"#333"
      }}>
      <h2>Counter Example</h2>
      <p style={{ fontSize: "1.5rem" }}>Count: {count}</p>

      <button
        style={{ margin: "1rem", backgroundColor: "lightgreen" }}
        onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button
        style={{ margin: "1rem", backgroundColor: "#ff4d4d" }}
        onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <button style={{ margin: "1rem" }} onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
