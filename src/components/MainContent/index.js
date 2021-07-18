import IntroTitle from '../IntroTitle'
import AboutMe from "../AboutMe"
import Skills from "../Skills"
import EmailForm from "../EmailForm"
import Carousel from '../Carousel'

const MainContent = () => {
  return (
    <div className="main-content">
      <IntroTitle />
      <Carousel />
      <AboutMe />
      <Skills />
      <EmailForm />
    </div>
  )
}

export default MainContent