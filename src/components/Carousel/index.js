import { useSelector, useDispatch } from 'react-redux'
import { setIncrease, setDecrease, setFromIndicator } from '../../redux/actions/carouselActions'
import projects from './projects'
import Projects from './Projects'
import CarouselArrow from './Arrow'
import CarouselIndicator from './Indicator'
import CarouselDescription from './Description'
import Modal from './Modal'
import useProgressCarousel from '../../Hooks/useProgressCarousel'

const Carousel = () => {
  const dispatch = useDispatch()
  const position = useSelector(state => state.carousel)
  const modalStatus = useSelector(state => state.modal)
  
  const {projectName, description, github, demoLink, live } = projects[position]
  
  const next = () => dispatch(setIncrease(position))
  const prev = () => dispatch(setDecrease(position))
  const updateFromIndicator = (num) => dispatch(setFromIndicator(num)) 
  
  useProgressCarousel(next, position, modalStatus)

  return (
    <div className="section carousel-projects" id="projects">
      <div className="carousel-section-container">

        <div className="carousel-container">
          <CarouselArrow updatePosition={prev} orientation="arrow-left" />
          <Projects position={position} projects={projects} />
          <CarouselArrow updatePosition={next} orientation="arrow-right" />
        </div>

        <CarouselIndicator 
          position={position} 
          length={projects.length}
          updateCarousel={updateFromIndicator}
        />

        {/* <CarouselDescription 
          projectName={projectName}
          description={description}
          github={github}
          demoLink={demoLink}
          live={live}
        /> */}

        {modalStatus ? <Modal /> : null}
      </div>
    </div> 
  )
}

export default Carousel