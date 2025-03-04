import React, { useState, useMemo } from "react";

// Expensive Fibonacci calculation
const fibonacci = (n) => {
  console.log(`Calculating Fibonacci(${n})...`);
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

const FibonacciComponent = ({ number }) => {
  // Memoized Fibonacci calculation
  const result = useMemo(() => fibonacci(number), [number]);

  return <h2>Fibonacci({number}) = {result}</h2>;
};

const FibonacciSeries = () => {
  const [number, setNumber] = useState(10);
  const [count, setCount] = useState(0); // Dummy state to test re-renders

  return (
    <div>
      <button onClick={() => setNumber((prev) => prev + 1)}>Increase Number</button>
      <button onClick={() => setCount(count + 1)}>Re-render ({count})</button>
      <FibonacciComponent number={number} />
    </div>
  );
};

export default FibonacciSeries;
