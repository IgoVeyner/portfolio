import './index.css'
import selfie from '../../images/selfie.JPG'

const AboutMe = () => {
  return (
    <section className="section" id="about">
      <div className="about">
        <div className="about-image">
          <img src={selfie} alt="selfie" className="selfie-img" />
        </div>
        <div className="about-text-container">
          <h2 className="about-title">Hello!</h2>
          <p className="about-text">
            My name is Igor.
          </p>
          <p className="about-text">
            I'm a NYC based Full-Stack Software Engineer and 
            a proud graduate of The Flatiron School where I learned Ruby on Rails for 
            Backend and React for Frontend development. If you're interested in learning 
            more about my skills, click here.
          </p>
          <p className="about-text">
            When I'm not sitting in front of a computer screen you can find me 
            skateboarding in the streets and parks across New York.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutMe