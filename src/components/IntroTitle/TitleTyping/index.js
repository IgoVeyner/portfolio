import React, { useState } from "react";
import useTypingAnimation from '../../../Hooks/useTypingAnimation'
import Blinker from "../Blinker";

const words = ["Engineer", "Developer"]

const TitleTyping = ({ titleColor }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useTypingAnimation(words, index, setIndex, reverse, setReverse, subIndex, setSubIndex)

  return (
    <div className="title-typing">
      <span className="linux">
          ~$
      </span> 
      <span className={`title-ending ${titleColor} terminal`}>
        {`${words[index].substring(0, subIndex)}`}
      </span>
      <Blinker titleColor={titleColor} />
    </div>
  )
}

export default TitleTyping