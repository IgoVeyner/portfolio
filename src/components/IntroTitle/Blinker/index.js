import React, { useState } from "react";
import useBlink from '../../../Hooks/useBlink'

const Blinker = ({ titleColor }) => {
  const [blink, setBlink] = useState(true);
  const blinkerColor = titleColor === "light-title" ? "light-blinker" : "dark-blinker"
  useBlink(blink, setBlink)

  return (
    <span className={`blinker ${blink ? blinkerColor : null}`}> </span> 
  )
}

export default Blinker