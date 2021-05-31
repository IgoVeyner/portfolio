import "./index.css"

const TitleRotating = ({ color }) => {
  return (
    <div className="title-container">
      <div className="rotate-container">
        <ul className="rotating">
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