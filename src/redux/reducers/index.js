import { combineReducers } from "redux"
import handleTheme from './themeReducer'
import handleModal from './modalReducer'
import handleCarousel from './carouselReducer'

const rootReducer = combineReducers({
  theme: handleTheme,
  modal: handleModal,
  carousel: handleCarousel
})

export default rootReducer