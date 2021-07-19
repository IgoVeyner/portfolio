import { useSelector, useDispatch } from 'react-redux'
import projects from '../projects'
import useModalVisibility from '../../../Hooks/useModalVisiblity'
import { setOpen, setClose } from '../../../redux/actions/modalActions'

const Modal = () => {
  const position = useSelector(state => state.carousel)
  const theme = useSelector(state => state.theme)
  const modalStatus = useSelector(state => state.modal)
  
  useModalVisibility()

  const dispatch = useDispatch()

  const toggleModal = () => {
    dispatch(modalStatus ? setClose() : setOpen())
  }

  
  const { projectName, img } = projects[position]
  const modalBackground = theme === "dark" ? "dark-modal" : "light-modal"

  return (
    <div 
      className={modalBackground}
      onClick={toggleModal}
      style={{top: window.pageYOffset}}
      >
      <img 
        className="modal-img"
        src={img}
        alt={projectName}
        onClick={toggleModal}
      />
    </div>
  )
}

export default Modal