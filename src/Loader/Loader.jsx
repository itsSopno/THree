import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Loader = ({ finishedLoading }) => {
  const loaderRef = useRef();
  const counterRef = useRef();
  const overlayRef = useRef();

  useEffect(() => {
    let data = { value: 0 };
    const tl = gsap.timeline();

    // ১. কাউন্টার এনিমেশন (একটু দ্রুত হবে)
    gsap.to(data, {
      value: 100,
      duration: 3,
      ease: "expo.out",
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.innerText = Math.round(data.value);
        }
      }
    });

    // ২. মেইন এনিমেশন সিকোয়েন্স
    tl.to(".reveal-text", {
      y: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power4.out",
      delay: 0.5
    })
    .to(".reveal-text", {
      y: "-110%",
      duration: 1,
      delay: 1,
      ease: "power4.in"
    })
    .to(".loader-panel", {
      height: 0,
      duration: 1.2,
      stagger: 0.1,
      ease: "expo.inOut",
      onComplete: finishedLoading
    });

  }, [finishedLoading]);

  return (
    <div ref={loaderRef} className="abstract-loader">
      {/* দুটি প্যানেল যা স্লাইড হয়ে খুলে যাবে */}
      <div className="loader-panel top"></div>
      <div className="loader-panel bottom"></div>

      <div className="loader-content">
        <div className="text-wrapper">
          <h1 className="reveal-text">DOGSTUDIO</h1>
        </div>
        
        <div className="counter-box">
          <span ref={counterRef} className="big-counter">0</span>
          <div className="loading-tag">EXPERIENCE LOADING</div>
        </div>
      </div>
    </div>
  );
};

export default Loader;