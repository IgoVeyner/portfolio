const CarouselIndicator = ({ position, length, updateCarousel }) => {
  const renderCircles = () => {
    const circles = []

    for (let i = 0; i < length; i ++) {
      circles.push(renderCircle(i))
    }

    return circles
  }

  const renderCircle = (current) => {
    const filled = current === position ? "indicator-filled" : ""
    
    return (
      <div 
        className="indicator-circle-container"
        key={`circle-${current}`}
        onClick={() => updateCarousel(current)}
        >
        <svg 
          viewBox="0 0 100 100" 
          xmlns="http://www.w3.org/2000/svg" 
          className={`indicator-circle ${filled}`}>
          <circle cx="50" cy="50" r="50"/>
        </svg>
      </div>
    )
  }
  
  return (
    <div className="carousel-indicator">
      {renderCircles()}
    </div> 
  )
}

export default CarouselIndicator