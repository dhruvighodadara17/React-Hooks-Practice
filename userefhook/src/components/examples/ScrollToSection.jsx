import { useRef } from 'react';

function ScrollToSection() {
  const sectionRef = useRef(null);

  const handleScroll = () => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <button onClick={handleScroll}>Go to Section</button>
      <div style={{ height: '100vh', background: 'lightgray' }}>Scroll Down</div>
      <div ref={sectionRef} style={{ height: '100vh', background: 'blue' }}>
        Target Section
      </div>
    </div>
  );
}
export default ScrollToSection;