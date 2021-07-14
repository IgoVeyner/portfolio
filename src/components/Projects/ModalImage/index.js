import { useEffect } from "react";

const ModalImage = ({ image, toggleModal }) => {

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => document.body.style.overflow = 'unset';
  }, []);

  return (
    <div 
      className='modal-container'
      onClick={toggleModal}
      style={{top: window.pageYOffset}}
      >
      <img 
        className="modal-img"
        src={image}
        alt="stub"
        onClick={toggleModal}
      />
    </div>
  )
}

export default ModalImage