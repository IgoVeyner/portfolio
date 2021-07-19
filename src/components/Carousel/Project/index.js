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
      <li className="carousel-li">
        <img 
          className="carousel-img"
          src={img}
          alt={projectName}
          onClick={toggleModal}
        />
      </li> 
      {modalStatus ? 
        <Modal img={img} toggleModal={toggleModal} projectName={projectName} /> 
        : 
        null
      }
    </>
  )
}

export default Project