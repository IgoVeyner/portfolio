import IntroTitle from '../IntroTitle'
import Projects from "../Projects"
import AboutMe from "../AboutMe"
import Skills from "../Skills"
import EmailForm from "../EmailForm"

const MainContent = () => {
  return (
    <div className="main-content">
      <IntroTitle />
      <Projects />
      <AboutMe />
      <Skills />
      <EmailForm />
    </div>
  )
}

export default MainContent