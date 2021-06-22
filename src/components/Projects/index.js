import { useSelector } from 'react-redux'
import Project from "./Project"
import projects from './projects'

const renderProjects = (theme) =>{
  return projects.map((project, i) => { 
    return (
      <Project project={project} id={`project-${i+1}`} key={`project-${i+1}`}
        reverse={i % 2 === 0 ? false : true} theme={theme}
      /> 
    )
  })
}

const Projects = () => {
  const theme = useSelector(state => state.theme)

  return (
    <>
      {renderProjects(theme)}
    </>
  )
}

export default Projects