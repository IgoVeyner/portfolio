const handleTheme = (state="dark", action) => {
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