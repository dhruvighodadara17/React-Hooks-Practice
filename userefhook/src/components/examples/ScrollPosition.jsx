import { useRef, useEffect } from "react";

function ScrollPosition() {
  const scrollRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
      console.log(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <p style={{ height: "1000px", backgroundColor: "lightskyblue" }}>
      Scroll down and check console.
    </p>
  );
}

export default ScrollPosition;
