import { useRef } from "react";

function PreventMultipleClicks() {
  const buttonRef = useRef(false);

  const handleClick = () => {
    if (buttonRef.current) return; // Prevent multiple clicks
    buttonRef.current = true;

    console.log("Button clicked!");

    setTimeout(() => {
      buttonRef.current = false; // Reset after 2 seconds
    }, 2000);
  };

  return <button onClick={handleClick}>Click Me</button>;
}
export default PreventMultipleClicks;
