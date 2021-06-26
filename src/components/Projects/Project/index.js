import GithubIcon from '../../Icons/Github'
import YoutubeIcon from '../../Icons/Youtube'
import './index.css'

const Project = ({ project, id, reverse, theme }) => {
  const {projectName, description, github, demoLink, img } = project
  const [orderReverse, projReverse] = 
    reverse ? ["order-reverse", "project-reverse"] : ["", ""]
  let [titleColor, textColor] = getStyles(theme)

  return (
    <section className="section section-project" id={id}>
      <div className={`project ${projReverse}`}>
        <div className={`project-preview ${orderReverse}`}>
          <img 
            className="project-img"
            src={img}
            alt="stub"
          />
        </div>
        <div className="project-description">
          <h1 className={`project-title ${titleColor}`}>{projectName}</h1>
          <p className={`project-text ${textColor}`}>{description}</p>
          <div className="project-links-container">
            <GithubIcon link={github} />
            <YoutubeIcon link={demoLink} />
          </div>
        </div>
      </div>
    </section>
  )
}

const getStyles = (theme) => {

  if (theme === "dark") {
    return ["dark-proj-title", "dark-proj-text"]
  } else {
    return ["light-proj-title", "light-proj-text"]
  }

}

export default Project