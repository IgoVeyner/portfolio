import { useSelector, useDispatch } from 'react-redux'
import { setIncrease, setDecrease, setFromIndicator } from '../../redux/actions/carouselActions'
import projects from './projects'
import Projects from './Projects'
import CarouselArrow from './Arrow'
import CarouselIndicator from './Indicator'
import Modal from './Modal'
import useProgressCarousel from '../../Hooks/useProgressCarousel'

const Carousel = () => {
  const dispatch = useDispatch()
  const position = useSelector(state => state.carousel)
  const modalStatus = useSelector(state => state.modal)
  
  const next = () => dispatch(setIncrease(position + 1))
  const prev = () => dispatch(setDecrease(position - 1))
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

        {modalStatus ? <Modal /> : null}
      </div>
    </div> 
  )
}

export default Carousel