import { useSelector } from 'react-redux'
import GithubIcon from '../../Icons/Github'
import YoutubeIcon from '../../Icons/Youtube'
import WebsiteIcon from '../../Icons/Website'

const CarouselDescription = ({ projectName, description, github, demoLink, live }) => {
  const theme = useSelector(state => state.theme)

  let [titleColor, textColor, iconColor] = getStyles(theme)

  return (
    <div className="carousel-proj-desc">
      <h1 className={`project-title ${titleColor}`}>{projectName}</h1>
      <p className={`project-text ${textColor}`}>{description}</p>

      <div className="carousel-proj-links">
        <GithubIcon link={github} iconColor={iconColor} />
        {live ? <WebsiteIcon link={live} iconColor={iconColor} /> : null}
        <YoutubeIcon link={demoLink} iconColor={iconColor} />
      </div>
    </div>
  )
}

const getStyles = (theme) => {

  if (theme === "dark") {
    return ["dark-title", "", "dark-icon"]
  } else {
    return ["light-title", "light-proj-text", "light-icon"]
  }

}

export default CarouselDescription