import React, { useState, useMemo } from "react";

// Simulating an expensive computation
const heavyFunction = () => {
  console.log("Running heavy computation...");
  let total = 0;
  for (let i = 0; i < 1e8; i++) {
    total += i;
  }
  return total;
};

const ExpensiveComputation = ({ calculate }) => {
  // Memoized expensive calculation
  const result = useMemo(() => (calculate ? heavyFunction() : "Click to Compute"), [calculate]);

  return <h2>Result: {result}</h2>;
};

const HeavyCalculation = () => {
  const [calculate, setCalculate] = useState(false);

  return (
    <div>
      <button onClick={() => setCalculate((prev) => !prev)}>
        {calculate ? "Reset" : "Start Computation"}
      </button>
      <ExpensiveComputation calculate={calculate} />
    </div>
  );
};

export default HeavyCalculation;
