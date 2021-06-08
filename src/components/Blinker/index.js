import React, { useState, useEffect } from "react";
import "./index.css"

const Blinker = ({ titleColor }) => {
  console.log(titleColor)
  const blinkerColor = titleColor === "light-title" ? "light-blinker" : "dark-blinker"

  return (
    <span className={`blinker ${blinkerColor}`}> </span> 
  )
}

export default Blinker