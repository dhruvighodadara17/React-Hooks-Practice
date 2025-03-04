import React, { useState, useMemo } from "react";

const numbers = [34, 12, 5, 78, 89, 21, 45];

const SortedNumbers = () => {
  const [order, setOrder] = useState("asc");

  const sortedNumbers = useMemo(() => {
    console.log("Sorting numbers...");
    return [...numbers].sort((a, b) => (order === "asc" ? a - b : b - a));
  }, [order]);

  return (
    <div>
      <h2>Sorted Numbers: {sortedNumbers.join(", ")}</h2>
      <button onClick={() => setOrder(order === "asc" ? "desc" : "asc")}>
        Toggle Order
      </button>
    </div>
  );
};

export default SortedNumbers;
