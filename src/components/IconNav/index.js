import { useSelector } from 'react-redux'
import GithubIcon from '../GithubIcon'
import "./index.css"

const IconNav = ({ classNames }) => {
  const [navName] = classNames
  const theme = useSelector(state => state.theme)
  const iconColor = theme === "dark" ? "dark-icon" : "light-icon"

  return (
    <nav className={navName} >

      <a href="https://igor-veyner.medium.com/" className="icon-container" id="medium" target="_blank" rel="noreferrer">
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

      <GithubIcon link={"https://github.com/IgoVeyner"} iconColor={iconColor} />

      <a href="https://www.linkedin.com/in/igorveyner/" className="icon-container" id="linkedIn" target="_blank" rel="noreferrer">
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