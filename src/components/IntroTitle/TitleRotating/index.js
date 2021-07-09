const TitleRotating = ({ color, titleColor }) => {
  return (
    <div className="title-container">
      <div className={`rotate-container ${titleColor}`}>
        <ul className="rotating">
          <li className="li-rotate">Software</li>
          <li className="li-rotate">Full Stack</li>
          <li className="li-rotate">Frontend</li>
          <li className="li-rotate">Backend</li>
        </ul>
      </div>

      <span className={`line ${color}`}></span>
    </div>
  )
}

export default TitleRotating