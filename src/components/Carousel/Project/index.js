import Modal from '../Modal'
import { useSelector, useDispatch } from 'react-redux'
import { setOpen, setClose } from '../../../redux/actions/modalActions'

const Project = ({ projectName, img }) => {
  const modalStatus = useSelector(state => state.modal)
  const dispatch = useDispatch()
  
  const toggleModal = () => {
    dispatch(modalStatus ? setClose() : setOpen())
  }

  return (
    <>
      <div className="carousel-content">
        <img 
          className="carousel-img"
          src={img}
          alt={projectName}
          onClick={toggleModal}
        />
      </div> 
      {modalStatus ? 
        <Modal img={img} toggleModal={toggleModal} projectName={projectName} /> 
        : 
        null
      }
    </>
  )
}

export default Project