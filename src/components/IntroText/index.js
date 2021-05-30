import "./index.css"
import { useSelector } from 'react-redux'

const IntroText = () => {
  const theme = useSelector(state => state.theme)
  const color = theme === "dark" ? "light-line" : "dark-line" 

  return (
    <section className="section">
      <div className="intro-title">
        <div className="name-container">
          <h3 className="name">Igor Veyner</h3>
        </div>

        <div className="title-container">
          <div className="rotate-container">
            <ul className="rotating">
              <li className="li-rotate">Frontend</li>
              <li className="li-rotate">Backend</li>
              <li className="li-rotate">Full Stack</li>
            </ul>
          </div>

          <span className={`line ${color}`}></span>
        </div>

        <span className="rotate-span">Engineer</span>
      </div>
    </section>
  )
}

export default IntroText