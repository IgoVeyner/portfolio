import { useSelector } from 'react-redux'
import GithubIcon from '../../Icons/Github'
import YoutubeIcon from '../../Icons/Youtube'
import WebsiteIcon from '../../Icons/Website'

const CarouselDescription = ({ projectName, description, github, demoLink, live }) => {
  const theme = useSelector(state => state.theme)

  let [iconColor] = getStyles(theme)

  return (
    <div className="carousel-proj-desc">
      <h1 className='project-title'>{projectName}</h1>
      <p className='project-text'>{description}</p>

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
    return ["proj-icon"]
  } else {
    return ["proj-icon"]
  }

}

export default CarouselDescription