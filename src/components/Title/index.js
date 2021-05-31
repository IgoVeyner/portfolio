import "./index.css"

const Title = ({ color }) => {
  return (
    <>
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

      <span className="title-ending">
        <span className="linux">
          ~$
        </span> 
        Engineer
      </span>
    </>
  )
}

export default Title