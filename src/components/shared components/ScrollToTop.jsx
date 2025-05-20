import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top smoothly on route change
    window.scrollTo({ top: 0, behavior: 'instant' }); // use 'smooth' if preferred
  }, [pathname]);

  return null;
};

export default ScrollToTop;
