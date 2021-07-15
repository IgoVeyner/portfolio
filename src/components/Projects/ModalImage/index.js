import { useEffect } from "react";
import { useSelector } from "react-redux"

const ModalImage = ({ image, toggleModal }) => {
  // finish background color
  const theme = useSelector(state => state.theme)

  const modalBackground = theme === "dark" ? "dark-modal" : "light-modal"

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => document.body.style.overflow = 'unset';
  }, []);

  return (
    <div 
      className={modalBackground}
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