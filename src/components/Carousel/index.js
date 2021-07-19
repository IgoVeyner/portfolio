import { useSelector, useDispatch } from 'react-redux'
import { setIncrease, setDecrease, setFromIndicator } from '../../redux/actions/carouselActions'
import projects from './projects'
import Project from './Project'
import Projects from './Projects'
import CarouselArrow from './Arrow'
import CarouselIndicator from './Indicator'
import CarouselDescription from './Description'

const Carousel = () => {
  const dispatch = useDispatch()
  const position = useSelector(state => state.carousel)

  const {projectName, description, github, demoLink, img, live } = projects[position]

  const next = () => dispatch(setIncrease(position))
  const prev = () => dispatch(setDecrease(position))
  const updateFromIndicator = (num) => dispatch(setFromIndicator(num)) 

  return (
    <div className="section carousel-projects" id="projects">
      <div className="carousel-section-container">
        <div className="carousel-container">
          <CarouselArrow updatePosition={prev} orientation="arrow-left" />
          <Projects />
          {/* <Project projectName={projectName} img={img} /> */}
          <CarouselArrow updatePosition={next} orientation="arrow-right" />
        </div>
        <CarouselIndicator 
          position={position} 
          length={projects.length}
          updateCarousel={updateFromIndicator}
        />
        <CarouselDescription 
          projectName={projectName}
          description={description}
          github={github}
          demoLink={demoLink}
          live={live}
        />
      </div>
    </div> 
  )
}

export default Carousel