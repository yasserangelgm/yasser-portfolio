import { useEffect, useState } from 'react';

export const useIntersectedObserver = (containerRef, options) => {
  /* const containerRef = useRef(null); */
  const [isVisible, setIsVisible] = useState(false);

  const handleIntersection = (entries) => {
    const [entry] = entries;
    if (!isVisible) setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, options);

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current || isVisible)
        observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);

  return isVisible;
};
