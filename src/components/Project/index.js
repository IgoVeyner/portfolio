const Project = ({ project }) => {
  const projectName = project.projectName
  const description = project.description
  const github = project.github
  const demo = project.demoLink
  
  return (
    <div className="project">
      <h1>{projectName}</h1>
      <p>{description}</p>
      <a href={github}>GitHub</a>
      <a href={demo}>Demo</a>
    </div>
  )
}

export default Project