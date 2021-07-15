import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { setOpen, setClose } from '../../../redux/actions/modalActions'
import ModalImage from "../ModalImage";

const Modal = ({ image, orderReverse, projectName }) => {
  const [isOpen, setIsOpen] = useState(false);

  const modalStatus = useSelector(state => state.modal)
  const dispatch = useDispatch()
  
  const toggleModal = () => {
    setIsOpen(!isOpen)
    dispatch(modalStatus ? setClose() : setOpen())
  }

  return (
    <div className={`project-preview ${orderReverse}`}>
      <img 
        className="project-img"
        src={image}
        alt={projectName}
        onClick={toggleModal}
      />
      {isOpen ? 
        <ModalImage image={image} toggleModal={toggleModal} projectName={projectName} /> 
        : 
        null
      }
    </div>
  )
}

export default Modal