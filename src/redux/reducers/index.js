import { combineReducers } from "redux"
import handleTheme from './themeReducer'
import handleModal from './modalReducer'

const rootReducer = combineReducers({
  theme: handleTheme,
  modal: handleModal
})

export default rootReducer