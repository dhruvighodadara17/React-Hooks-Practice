import React, { useState } from "react";

const ArrayManipulation = () => {
  const [items, setItems] = useState([]);
  return (
    <div>
      <h2>Array Manipulation Example</h2>
      <button onClick={() => setItems([...items, `Item ${items.length + 1}`])}>
        Add Item
      </button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ArrayManipulation;
