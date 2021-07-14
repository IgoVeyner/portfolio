const handleModal = (state = false, action) => {
  switch (action.type) {
    case "SET_OPEN":
      return action.payload

    case "SET_CLOSE":
      return action.payload

    default:
      return state
  }
}

export default handleModal