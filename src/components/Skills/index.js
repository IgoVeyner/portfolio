import './index.css'
import JavaScriptLi from './JavaScript'
import ReactLi from './React'
import ReduxLi from './Redux'
import HTMLLi from './HTML'
import CSSLi from './CSS'

const Skills = () => {
  return (
    <section className="section" id="skills">
        <h1 className="skills-header">Technical Skills</h1>

        <div className="skills-container">
          <div>
            <h2>Frontend</h2>
            <ul>
              <ReactLi />
              <ReduxLi />
              <JavaScriptLi />
              <HTMLLi />
              <CSSLi />
              <li>jQuery</li>
            </ul>
          </div>

          <div>
            <h2>Backend</h2>
            <ul>
              <li>Ruby</li>
              <li>Ruby on Rails</li>
              <li>SQLite</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
        </div>

    </section>
  )
}

export default Skills