import React, { useState, useCallback } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  const startTimer = useCallback(() => {
    setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  }, []);

  const stopTimer = useCallback(() => {
    console.log("stop");
    clearInterval(setSeconds);
  }, [startTimer]);
  // console.log("stop");

  // Reset Timer
  const resetTimer = useCallback(() => {
    stopTimer(); // Ensure interval is cleared
    setSeconds(0);
  }, [stopTimer]);

  return (
    <div>
      <p>Time: {seconds} seconds</p>
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={stopTimer}>Stop Timer</button>
      <button onClick={resetTimer}>Reset timer</button>
    </div>
  );
};

export default Timer;
