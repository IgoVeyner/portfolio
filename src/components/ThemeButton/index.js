import './index.css'
import { useSelector, useDispatch } from 'react-redux'
import { setLight, setDark } from '../../redux/actions/themeActions'
import AnimatedIcon from '../AnimatedIcon'

const ThemeButton = ({ classNames }) => {
  const [buttonName] = classNames

  const theme = useSelector(state => state.theme)
  const dispatch = useDispatch()
  const buttonColor = theme === "dark" ? "dark-button-cl" : "light-button-cl"

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

export default ThemeButton