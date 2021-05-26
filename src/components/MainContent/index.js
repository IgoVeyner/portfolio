import "./index.css"
import IntroText from '../IntroText'
import ProjectSummary from "../ProjectSummary"

const MainContent = () => {
  return (
    <div className="main-content">
      <IntroText />
      <ProjectSummary />
    </div>
  )
}

export default MainContent