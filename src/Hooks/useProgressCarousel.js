import { useEffect } from 'react';

const useProgressCarousel = (next, position, modalStatus) => {
  useEffect(() => {
    let nextSlide 
    if (!modalStatus) {
      nextSlide = setTimeout(() => {
        next()
      }, 5000);
    }

    return () => {
      if (nextSlide !== undefined) {
        clearTimeout(nextSlide)
      }
    };
  }, [next, position, modalStatus]);
}

export default useProgressCarousel