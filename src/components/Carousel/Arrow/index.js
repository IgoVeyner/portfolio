const CarouselArrow = ({ updatePosition, orientation }) => {
  const reverse = orientation === "arrow-left" ? "arrow-reverse" : ""

  return (
    <div 
      className={orientation}
      onClick={updatePosition}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 100 100"
        className={`carousel-arrow ${reverse}`} 
        >
        <path d="M13.6721 6.21762L87.6721 49.5189L13.6721 93.2176L18.1721 
          81.2176L62.6721 49.5189L18.1721 18.2176L13.6721 6.21762Z" 
          fill="black" />
      </svg>
    </div>
  )
}

export default CarouselArrow