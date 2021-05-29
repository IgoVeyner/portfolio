import { combineReducers } from "redux"
import handleTheme from './themeReducer'

const rootReducer = combineReducers({
  theme: handleTheme
})

export default rootReducer