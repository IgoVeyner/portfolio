import { useSelector, useDispatch } from 'react-redux'
import { setLight, setDark } from '../../../redux/actions/themeActions'
import AnimatedIcon from '../../Icons/Animated'

const ThemeButton = ({ classNames }) => {
  const [buttonName] = classNames

  const theme = useSelector(state => state.theme)
  const dispatch = useDispatch()
  
  const toggleTheme = () => dispatch(theme === "dark" ? setLight() : setDark())

  return (
    <button 
      className={`${buttonName}`}
      onClick={toggleTheme}
      >
      <AnimatedIcon theme={theme} />
    </button>
  )
}

export default ThemeButton