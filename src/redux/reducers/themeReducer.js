const getCurrentTime = () => {
  const date = new Date()
  const hour = date.getHours()

  return (hour > 5 && hour < 17) ? "light" : "dark"
}


const handleTheme = (state=getCurrentTime(), action) => {
  switch (action.type) {
    case "SET_LIGHT":
      return action.payload

    case "SET_DARK":
      return action.payload

    default:
      return state
  }
}

export default handleTheme