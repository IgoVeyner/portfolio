import { useState } from "react";

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
    </div>
  )
}

export default Modal