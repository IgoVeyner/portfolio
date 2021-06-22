import "./index.css"
import IntroText from '../IntroText'
import Projects from "../Projects"
import AboutMe from "../AboutMe"
import Skills from "../Skills"
import EmailForm from "../EmailForm"

const MainContent = () => {
  return (
    <div className="main-content">
      <IntroText />
      <Projects />
      <AboutMe />
      <Skills />
      <EmailForm />
    </div>
  )
}

export default MainContent