import './index.css'

const Project = ({ project }) => {
  const {projectName, description, github, demoLink } = project
  
  return (
    <section className="section" id="projects">
      <h1>{projectName}</h1>
      <p>{description}</p>
      <a href={github}>GitHub</a>
      <a href={demoLink}>Demo</a>
    </section>
  )
}

export default Project