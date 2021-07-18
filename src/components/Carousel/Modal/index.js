import { useSelector } from 'react-redux'
import useModalVisibility from '../../../Hooks/useModalVisiblity'

const Modal = ({ img, toggleModal, projectName }) => {
  const theme = useSelector(state => state.theme)
  useModalVisibility()

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