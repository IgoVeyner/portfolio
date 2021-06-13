import './index.css'
import selfie from '../../images/selfie.JPG'

const AboutMe = () => {
  return (
    <section className="section" id="about">
      <div className="about">
        <div className="about-image">
          <img src={selfie} alt="selfie" className="selfie-img" />
        </div>
        <div className="about-text">
          <h2>Hello!</h2>
          <p>
            My name is Igor and I'm a NYC based Full-Stack Software Engineer!
            I'm a proud graduate of The Flatiron School where I learned Ruby on Rails for 
            Backend and React for Frontend development. If you're interested in learning 
            more about my skills and technologies I use check out my skills section.
          </p>
          <p>
            I enjoy learning new technologies, starting new projects, and teaching.
            When I'm not sitting in front of a computer screen you can find me 
            skateboarding in the streets and parks across New York.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutMe