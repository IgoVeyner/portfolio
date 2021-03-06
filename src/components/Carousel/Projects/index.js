import Project from '../Project'
import CarouselDescription from '../Description'

const Projects = ({ position, projects }) => {
  const {projectName, description, github, demoLink, live } = projects[position]

  const renderProjects = () => {
    return projects.map ( project => {
      const { projectName, img } = project
      return <Project key={projectName} projectName={projectName} img={img} />
    })
  }
  
  const getLiClassName = () => {
    switch (position) {
      case 0:
        return "first-li"
    
      case 1:
        return "second-li"

      case 2:
        return "third-li"

      default:
        return "";
    }
  }

  const transformPosition = getLiClassName()

  return (
    <div className="carousel-list-container">
      <ul className={`carousel-list ${transformPosition}`}>
        {renderProjects()}

      </ul>
      <CarouselDescription 
          projectName={projectName}
          description={description}
          github={github}
          demoLink={demoLink}
          live={live}
        />
    </div>
  )
}

export default Projects