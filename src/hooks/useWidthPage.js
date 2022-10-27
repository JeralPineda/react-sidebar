import { useEffect, useState } from 'react';

export const useWidthPage = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isScreenLg, setIsScreenLg] = useState(false);

  const handleResize = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (width <= 1200) {
      setIsScreenLg(true);
    } else {
      setIsScreenLg(false);
    }
  }, [width]);

  return [isScreenLg];
};
