import './index.css'

const Project = ({ project, id }) => {
  const {projectName, description, github, demoLink } = project
  
  return (
    <section className="section" id={id}>
      <div className="project">
        <div className="project-preview">
          <img 
            className="project-img"
            src="https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder-1024x1024.png" 
            alt="stub"
          />
        </div>
        <div className="project-description">
          <h1 className="project-title">{projectName}</h1>
          <p>{description}</p>
          <a href={github}>GitHub</a>
          <a href={demoLink}>Demo</a>
        </div>
      </div>
    </section>
  )
}

export default Project