import Project from '../Project'
import projects from '../projects'
import { useSelector } from 'react-redux'

const Projects = () => {
  const position = useSelector(state => state.carousel)

  const renderProjects = () => {
    const render = []

    for (const project of projects) {
      const { projectName, img } = project
      render.push(renderProjectLi(projectName, img))
    }
    
    console.log(render)
    return render
  }

  const renderProjectLi = (projectName, img) => {
    return (
      <Project projectName={projectName} img={img} />
    )
  } 
  
  const transform = () => {
    if (position === 0) {
      return "first-li"
    } else if (position === 1) {
      return "second-li"
    } else {
      return "third-li"
    }
  }

  const transformPosition = transform()

  return (
    <div className="carousel-list-container">
      <ul className={`carousel-list ${transformPosition}`}>
        {renderProjects()}
      </ul>
    </div>
  )
}

export default Projects