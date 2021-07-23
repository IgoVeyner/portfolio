const handleCarousel = (state = 0, action) => {
  const length = 2

  switch (action.type) {
    case "SET_INCREASE":
      return action.payload > length ? 0 : action.payload

    case "SET_DECREASE":
      return action.payload < 0 ? length : action.payload

    case "SET_FROM_INDICATOR":
      return action.payload

    default:
      return state
  }
}

export default handleCarousel