import React from "react";

const Child = ({ onClick }) => {
  console.log("Child component rendered");
  return <button onClick={onClick}>Click Me</button>;
};

// Wrapping in React.memo to prevent unnecessary re-renders
export default React.memo(Child);
