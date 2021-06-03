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
      <svg 
        className="theme-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <mask id="mask">     
          <rect x="0" y="0" width="100%" height="100%" fill="white" />  
          <circle cx="12" cy="4" r="9" fill="black" />    
        </mask>
        <circle fill="black" cx="12" cy="12" r="9" mask="url(#mask)"/>
	      <g stroke="currentColor">
          {/* <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /> */}
        </g>
      </svg>
    </button>
  )
}

export default ThemeButton