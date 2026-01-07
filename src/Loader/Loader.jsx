import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Loader = ({ finishedLoading }) => {
  const loaderRef = useRef();
  const counterRef = useRef();

  useEffect(() => {
    // Simple loading animation
    let data = { value: 0 };
    gsap.to(data, {
      value: 100,
      duration: 3,
      ease: "power2.inOut",
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.innerText = Math.round(data.value) + "%";
        }
      },
      onComplete: () => {
        // Small delay then animate out
        setTimeout(() => {
          gsap.to(loaderRef.current, {
            y: "-100%",
            duration: 1,
            ease: "expo.inOut",
            onComplete: finishedLoading
          });
        }, 300);
      }
    });
  }, [finishedLoading]);

  return (
    <div ref={loaderRef} className="loader-wrapper">
      <div className="loader-content">
        <h1 className="loader-logo">DOGSTUDIO</h1>
        <div className="progress-bar">
          <div ref={counterRef} className="counter">0%</div>
        </div>
        <p>Loading Experience...</p>
      </div>
    </div>
  );
};

export default Loader;