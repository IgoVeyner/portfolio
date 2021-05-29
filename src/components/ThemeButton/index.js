import './index.css'
import { useSelector, useDispatch } from 'react-redux'
import { setLight, setDark } from '../../redux/actions/themeActions'

const ThemeButton = ({ classNames }) => {
  const [buttonName] = classNames

  const theme = useSelector(state => state.theme)
  const dispatch = useDispatch()

  const toggleTheme = () => dispatch(theme === "dark" ? setLight() : setDark())

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