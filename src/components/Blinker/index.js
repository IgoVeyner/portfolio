import React, { useState, useEffect } from "react";
import "./index.css"

const Blinker = ({ titleColor }) => {
  const [blink, setBlink] = useState(true);
  const blinkerColor = titleColor === "light-title" ? "light-blinker" : "dark-blinker"

  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink])

  return (
    <span className={`blinker ${blink ? blinkerColor : null}`}> </span> 
  )
}

export default Blinker