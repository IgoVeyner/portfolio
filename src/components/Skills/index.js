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
  let [titleColor, borderColor, textColor] = getStyles(theme)

  return (
    <section className="section section-skills" id="skills">
        <h1 className={`skills-header ${titleColor}`}>Technical Skills</h1>

        <div className="skills-container">
          <div>
            <h2 className={titleColor}>Frontend</h2>
            <ul>
              <ReactLi textColor={textColor} />
              <ReduxLi textColor={textColor} />
              <JavaScriptLi textColor={textColor} />
              <HTMLLi textColor={textColor} />
              <CSSLi textColor={textColor} />
              <JQueryLi textColor={textColor} />
            </ul>
          </div>

          <div className={borderColor}>
            <h2 className={titleColor}>Backend</h2>
            <ul>
              <RubyLi textColor={textColor} />
              <RailsLi textColor={textColor} />
              <SqliteLi textColor={textColor} />
              <PostgresLi textColor={textColor} />
            </ul>
          </div>
        </div>

    </section>
  )
}

const getStyles = (theme) => {

  if (theme === "dark") {
    return [
      "dark-skills-header", 
      "dark-border", 
      "dark-skills-text"
    ]
  } else {
    return [
      "light-skills-header",
      "light-border",
      "light-skills-text"
    ]
  }

}

export default Skills