const Project = ({ project }) => {
  const {projectName, description, github, demoLink } = project
  
  return (
    <div className="project">
      <h1>{projectName}</h1>
      <p>{description}</p>
      <a href={github}>GitHub</a>
      <a href={demoLink}>Demo</a>
    </div>
  )
}

export default Project