import GithubIcon from '../../Icons/Github'
import YoutubeIcon from '../../Icons/Youtube'
import WebsiteIcon from '../../Icons/Website'
import Divider from '../Divider'
import Modal from '../Modal'

const Project = ({ project, id, reverse, theme }) => {
  const {projectName, description, github, demoLink, img, live } = project
  const [orderReverse, projReverse] = 
    reverse ? ["order-reverse", "project-reverse"] : ["", ""]
  let [titleColor, textColor, iconColor] = getStyles(theme)

  return (
    <section className="section section-project" id={id}>
      <div className={`project ${projReverse}`}>

        <Modal image={img} orderReverse={orderReverse} projectName={projectName} />

        <div className="project-description">

          <Divider />
          <h1 className={`project-title ${titleColor}`}>{projectName}</h1>
          <p className={`project-text ${textColor}`}>{description}</p>

          <div className="project-links-container">

            <GithubIcon link={github} iconColor={iconColor} />
            {live ? <WebsiteIcon link={live} iconColor={iconColor} /> : null}
            <YoutubeIcon link={demoLink} iconColor={iconColor} />
            
          </div>
        </div>
      </div>
    </section>
  )
}

const getStyles = (theme) => {

  if (theme === "dark") {
    return ["dark-title", "", "dark-icon"]
  } else {
    return ["light-title", "light-proj-text", "light-icon"]
  }

}

export default Project