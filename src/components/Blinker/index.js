import React, { useState, useEffect } from "react";
import "./index.css"

const Blinker = ({ titleColor }) => {
  const blinkerColor = titleColor === "light-title" ? "light-blinker" : "dark-blinker"

  return (
    <span className={`blinker ${blinkerColor}`}> </span> 
  )
}

export default Blinker