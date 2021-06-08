import React, { useState, useEffect } from "react";
import "./index.css"

const words = ["Engineer", "Developer"]

const TitleTyping = ({ titleColor }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

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
  }, [subIndex, index, reverse]);

  return (
    <div>
      <span className="linux">
          ~$
      </span> 
      <span className={`title-ending ${titleColor} terminal`}>
        {`${words[index].substring(0, subIndex)}`}
      </span>
    </div>
  )
}

export default TitleTyping