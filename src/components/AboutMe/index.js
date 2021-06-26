import { useSelector } from 'react-redux'
import './index.css'
import selfie from '../../images/selfie.JPG'

const AboutMe = () => {
  const theme = useSelector(state => state.theme)
  const [aboutTitle, aboutText] = getStyles(theme)

  return (
    <section className="section section-about" id="about">
      <div className="about">
        <div className="about-image">
          <img src={selfie} alt="selfie" className="selfie-img" />
        </div>
        <div className="about-text-container">
          <h2 className={`about-title ${aboutTitle}`}>Hello!</h2>
          <p className={`about-text ${aboutText}`}>
            My name is Igor.
          </p>
          <p className={`about-text ${aboutText}`}>
            I'm a NYC based Full-Stack Software Engineer and 
            a proud graduate of <a href="https://flatironschool.com/"
              className="about-link" target="_blank" rel="noreferrer">
              The Flatiron School 
            </a> where I learned Ruby on Rails for 
            Backend and React for Frontend development. If you're interested in learning 
            more about my skills, click <a href="#skills" className="about-link">
              here
          </a>.</p>
          <p className={`about-text ${aboutText}`}>
            When I'm not sitting in front of a computer screen you can find me 
            skateboarding in the streets and parks across New York.
          </p>
        </div>
      </div>
    </section>
  )
}

const getStyles = (theme) => {

  if (theme === "dark") {
    return ["dark-about-title", "dark-about-text"]
  } else {
    return ["light-about-title", "light-about-text"]
  }

}

export default AboutMe