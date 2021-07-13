const ModalImage = ({ image, toggleModal }) => {
  return (
    <div 
      className="modal-container"
      onClick={toggleModal}
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