import './index.css'

const Skills = () => {
  return (
    <section className="section" id="skills">
        <h1>Technical Skills</h1>

        <div className="skills-container">
          <div>
            <h2>Frontend</h2>
            <ul>
              <li>React & Redux</li>
              <li>JavaScript (ES6)</li>
              <li>jQuery</li>
              <li>HTML</li>
              <li>CSS</li>
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