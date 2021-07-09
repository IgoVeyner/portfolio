import { useSelector } from 'react-redux'
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
            I'm a NYC based Software Engineer and 
            graduate of <a href="https://flatironschool.com/"
              className="about-link" target="_blank" rel="noreferrer">
              Flatiron School 
            </a>'s Software Engineering Bootcamp. You can read my technical blog posts 
            on <a 
              href="https://igor-veyner.medium.com/" 
              className="about-link"
            >Medium</a> and check out my skills <a 
              href="#skills" 
              className="about-link"
            >
              here
          </a>.</p>
          <p className={`about-text ${aboutText}`}>
            When I'm not sitting in front of a computer you can find me 
            skateboarding in the streets and parks across New York.
          </p>
        </div>
      </div>
    </section>
  )
}

const getStyles = (theme) => {

  if (theme === "dark") {
    return ["dark-title", ""]
  } else {
    return ["light-title", "light-about-text"]
  }

}

export default AboutMe