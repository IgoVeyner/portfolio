import './index.css'
import { useSelector, useDispatch } from 'react-redux'

const ThemeButton = ({ classNames }) => {
  const [buttonName] = classNames

  const theme = useSelector(state => state.theme)
  const dispatch = useDispatch()

  const toggleTheme = () => {
    let action

    if (theme === "dark") {
      action = {
        type: "SET_LIGHT",
        payload: "light"
      }
    } else {
      action = {
        type: "SET_DARK",
        payload: "dark"
      }
    }

    dispatch(action)
  }

  return (
    <button 
      className={buttonName}
      onClick={toggleTheme}
      >
      -theme-
    </button>
  )
}

export default ThemeButton