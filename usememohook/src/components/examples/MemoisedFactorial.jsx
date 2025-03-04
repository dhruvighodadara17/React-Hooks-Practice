import React, { useState, useMemo } from "react";

const factorial = (n) => {
  console.log("Calculating factorial...");
  return n <= 1 ? 1 : n * factorial(n - 1);
};

const MemoizedFactorial = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(5);

  const memoizedFactorial = useMemo(() => factorial(number), [number]);

  return (
    <div>
      <h2>Factorial of {number}: {memoizedFactorial}</h2>
      <button onClick={() => setNumber(number + 1)}>Increase Number</button>
      <button onClick={() => setCount(count + 1)}>Re-render ({count})</button>
    </div>
  );
};

export default MemoizedFactorial;
