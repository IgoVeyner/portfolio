const handleCarousel = (state = 0, action) => {
  switch (action.type) {
    case "SET_INCREASE":
      return action.payload

    case "SET_DECREASE":
      return action.payload

    case "SET_FROM_INDICATOR":
      return action.payload

    default:
      return state
  }
}

export default handleCarousel