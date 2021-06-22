import "./index.css"
import IntroText from '../IntroText'
import ProjectSummary from "../Projects/ProjectSummary"
import AboutMe from "../AboutMe"
import Skills from "../Skills"
import EmailForm from "../EmailForm"

const MainContent = () => {
  return (
    <div className="main-content">
      <IntroText />
      <ProjectSummary />
      <AboutMe />
      <Skills />
      <EmailForm />
    </div>
  )
}

export default MainContent