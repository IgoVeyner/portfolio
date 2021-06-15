import "./index.css"
import IntroText from '../IntroText'
import ProjectSummary from "../ProjectSummary"
import AboutMe from "../AboutMe"
import Skills from "../Skills"

const MainContent = () => {
  return (
    <div className="main-content">
      <IntroText />
      <ProjectSummary />
      <AboutMe />
      <Skills />
    </div>
  )
}

export default MainContent