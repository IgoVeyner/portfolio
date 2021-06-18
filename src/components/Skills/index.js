import './index.css'
import JavaScriptLi from './JavaScript'
import ReactLi from './React'
import ReduxLi from './Redux'
import HTMLLi from './HTML'
import CSSLi from './CSS'
import JQueryLi from './jQuery'
import RubyLi from './Ruby'
import RailsLi from './Rails'
import SqliteLi from './Sqlite'
import PostgresLi from './Postgres'
import { useSelector } from 'react-redux'

const Skills = () => {
  const theme = useSelector(state => state.theme)
  const titleColor = theme === "dark" ? "dark-skills-header" : "light-skills-header"

  return (
    <section className="section section-skills" id="skills">
        <h1 className={`skills-header ${titleColor}`}>Technical Skills</h1>

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
              <SqliteLi />
              <PostgresLi />
            </ul>
          </div>
        </div>

    </section>
  )
}

export default Skills