import './index.css'

const Project = ({ project, id }) => {
  const {projectName, description, github, demoLink } = project
  
  return (
    <section className="section" id={id}>
      <div className="project-preview">

      </div>
      <div className="project-description">
        <h1>{projectName}</h1>
        <p>{description}</p>
        <a href={github}>GitHub</a>
        <a href={demoLink}>Demo</a>
      </div>
    </section>
  )
}

export default Project