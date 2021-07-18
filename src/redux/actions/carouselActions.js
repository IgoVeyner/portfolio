export const setIncrease = (num) => {
  const updatedNum = num === 2 ? 0 : num + 1
  
  return {
    type: "SET_INCREASE",
    payload: updatedNum
  }
}

export const setDecrease = (num) => {
  const updatedNum = num === 0 ? 2 : num - 1

  return {
    type: "SET_DECREASE",
    payload: updatedNum
  }
}

export const setFromIndicator = (num) => {
  return {
    type: "SET_FROM_INDICATOR",
    payload: num
  }
}