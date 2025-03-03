import React, { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <div>
      <h2>Timer Example</h2>
      <p>Time Elapsed: {seconds} seconds</p>
    </div>
  );
};

export default Timer;
