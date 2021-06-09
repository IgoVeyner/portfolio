import './index.css'

const Project = ({ project, id, reverse }) => {
  const {projectName, description, github, demoLink } = project
  let [orderReverse, descReverse, projReverse] = ["", "", ""]

  if (reverse) {
    [orderReverse, descReverse, projReverse] = ["order-reverse", "description-reverse", "project-reverse"]
  }

  return (
    <section className="section" id={id}>
      <div className={`project ${projReverse}`}>
        <div className={`project-preview ${orderReverse}`}>
          <img 
            className="project-img"
            src="https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder-1024x1024.png" 
            alt="stub"
          />
        </div>
        <div className={`project-description ${descReverse} `}>
          <h1 className="project-title">{projectName}</h1>
          <p className="project-text">{description}</p>
          <a href={github}>GitHub</a>
          <a href={demoLink}>Demo</a>
        </div>
      </div>
    </section>
  )
}

export default Project