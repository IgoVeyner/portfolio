import "./index.css"

const IntroText = () => {
  return (
    <section className="section intro-title">
      <div className="name-container">
        <h3 className="name">Igor Veyner</h3>
      </div>

      <div className="rotate-container">
        <ul className="rotating">
          <li className="li-rotate">Frontend</li>
          <li className="li-rotate">Backend</li>
          <li className="li-rotate">Full Stack</li>
        </ul>
        
        <span> Engineer</span>
      </div>

    </section>
  )
}

export default IntroText