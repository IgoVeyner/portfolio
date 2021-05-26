import "./index.css"
import IntroText from '../IntroText'
import ProjectSummary from "../ProjectSummary"
import AboutMe from "../AboutMe"

const MainContent = () => {
  return (
    <div className="main-content">
      <IntroText />
      <ProjectSummary />
      <AboutMe />
    </div>
  )
}

export default MainContent