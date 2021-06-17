import './index.css'
import JavaScriptLi from './JavaScript'
import ReactLi from './React'
import ReduxLi from './Redux'
import HTMLLi from './HTML'
import CSSLi from './CSS'
import JQueryLi from './jQuery'
import RubyLi from './Ruby'
import RailsLi from './Rails'

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
              <JQueryLi />
            </ul>
          </div>

          <div>
            <h2>Backend</h2>
            <ul>
              <RubyLi />
              <RailsLi />
              <li>SQLite</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
        </div>

    </section>
  )
}

export default Skills