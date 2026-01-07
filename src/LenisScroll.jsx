import { useEffect } from 'react';
import Lenis from 'lenis'; // সঠিক ইমপোর্ট
import { useLocation } from 'react-router-dom';

const LenisScroll = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
  
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

  
    lenis.scrollTo(0, { immediate: true });

    return () => {
      lenis.destroy();
    };
  }, [pathname]); 

  return <>{children}</>;
};

export default LenisScroll;