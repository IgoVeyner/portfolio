import GithubIcon from '../../Icons/Github'
import YoutubeIcon from '../../Icons/Youtube'
import './index.css'

const Project = ({ project, id, reverse, theme }) => {
  const {projectName, description, github, demoLink, img } = project
  let [orderReverse, projReverse] = ["", "", ""]
  let [titleColor, textColor] = ["dark-proj-title", "dark-proj-text"]

  if (reverse) {
    [orderReverse, projReverse] = ["order-reverse", "project-reverse"]
  }

  if (theme === "light") {
    [titleColor, textColor] = ["light-proj-title", "light-proj-text"]
  }

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

export default Project