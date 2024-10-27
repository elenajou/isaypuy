import { useState, useEffect, useRef } from 'react';

function FadeInSection({classes, children, viewHeight}) {
  const [isVisible, setVisible] = useState(false);
  const [wasVisible, setWasVisible] = useState(false);
  const domRef = useRef();
  useEffect(() => {
    if (isVisible && !wasVisible) 
      setWasVisible(true);
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!wasVisible && entry.isIntersecting)
          setVisible(entry.isIntersecting);
      });
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section-${viewHeight} ${isVisible ? 'is-visible' : ''} + ${classes}`}
      ref={domRef}
    >
      {children}
    </div>
  );
}

export default FadeInSection;