import './index.css'
import { useSelector, useDispatch } from 'react-redux'
import { setLight, setDark } from '../../../redux/actions/themeActions'
import AnimatedIcon from '../../Icons/Animated'

const ThemeButton = ({ classNames }) => {
  const [buttonName] = classNames

  const theme = useSelector(state => state.theme)
  const dispatch = useDispatch()
  const [buttonColor] = getStyles(theme)

  const toggleTheme = () => dispatch(theme === "dark" ? setLight() : setDark())

  return (
    <button 
      className={`${buttonName} ${buttonColor}`}
      onClick={toggleTheme}
      >
      <AnimatedIcon theme={theme} />
    </button>
  )
}

const getStyles = (theme) => {

  if (theme === "dark") {
    return ["dark-button-cl"]
  } else {
    return ["light-button-cl"]
  }

}

export default ThemeButton