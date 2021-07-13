import { useEffect } from "react";

const ModalImage = ({ image, toggleModal, isOpen }) => {
  const openStatus = isOpen ? "open" : "";

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => document.body.style.overflow = 'unset';
  }, []);

  return (
    <div 
      className={`modal-container ${openStatus}`}
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