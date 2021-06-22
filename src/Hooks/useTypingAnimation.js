import { useEffect } from 'react';

const useTypingAnimation = (words, index, setIndex, reverse, setReverse, subIndex, setSubIndex) => {
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse ) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      index === words.length - 1 ? setIndex(0) : setIndex((prev) => prev + 1)
      return;
    }


    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 :
                150, parseInt(Math.random() * 1000)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, setIndex, setReverse, setSubIndex, words]);
}

export default useTypingAnimation