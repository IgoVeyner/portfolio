import { useEffect } from 'react';

const useBlink = (blink, setBlink) => {
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink(!blink)
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink])
}

export default useBlink