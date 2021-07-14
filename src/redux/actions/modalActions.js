export const setOpen = () => {
  return {
    type: "SET_OPEN",
    payload: true
  }
}

export const setClose = () => {
  return {
    type: "SET_CLOSE",
    payload: false
  }
}