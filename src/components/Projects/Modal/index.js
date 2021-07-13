import { useState } from "react";
import ModalImage from "../ModalImage";

const Modal = ({ image, orderReverse }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleModal = () => setIsOpen(!isOpen)

  return (
    <div className={`project-preview ${orderReverse}`}>
      <img 
        className="project-img"
        src={image}
        alt="stub"
        onClick={toggleModal}
      />
      {isOpen ? 
        <ModalImage image={image} toggleModal={toggleModal} isOpen={isOpen}/> 
        : 
        null
      }
    </div>
  )
}

export default Modal