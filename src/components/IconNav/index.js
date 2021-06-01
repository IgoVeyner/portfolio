import { useSelector } from 'react-redux'
import "./index.css"

const IconNav = ({ classNames }) => {
  const [navName] = classNames
  const theme = useSelector(state => state.theme)
  const iconColor = theme === "dark" ? "dark-icon" : "light-icon"

  return (
    <nav className={navName} >

      <a href="https://igor-veyner.medium.com/" className="icon-container" id="medium" target="_blank" >
        <svg className={`icon ${iconColor} medium`}>
          <path 
            d="M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h6.958l5.378 11.795 
            4.728-11.795h6.633v.403l-1.916 1.837c-.165.126-.247.333-.213.538v13.498c-.034.204.048.411.213.537l1.871 
            1.837v.403h-9.412v-.403l1.939-1.882c.19-.19.19-.246.19-.537v-10.91l-5.389 
            13.688h-.728l-6.275-13.688v9.174c-.052.385.076.774.347 1.052l2.521 
            3.058v.404h-7.148v-.404l2.521-3.058c.27-.279.39-.67.325-1.052v-10.608z"
          />
        </svg>
      </a>

      <a href="https://github.com/IgoVeyner" className="icon-container" id="github" target="_blank" >
        <svg  className={`icon ${iconColor}`}>
          <path 
            d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 
            9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 
            1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 
            0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 
            2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 
            4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" 
          />
        </svg>
      </a>

      <a href="https://www.linkedin.com/in/igorveyner/" className="icon-container" id="linkedIn" target="_blank" >
        <svg className={`icon ${iconColor} medium`}>
          <path 
            d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 
            1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 
            0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z"
          />
        </svg>
      </a>
    </nav>
  )
}

export default IconNav