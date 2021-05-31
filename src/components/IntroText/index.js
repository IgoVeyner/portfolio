import "./index.css"
import { useSelector } from 'react-redux'
import Name from "../Name"
import TitleRotating from "../TitleRotating"
import TitleTyping from "../TitleTyping"

const IntroText = () => {
  const theme = useSelector(state => state.theme)
  const color = theme === "dark" ? "light-line" : "dark-line" 

  return (
    <section className="section">
      <div className="intro-title">
        <Name />
        <TitleRotating color={color}/>
        <TitleTyping />
      </div>
    </section>
  )
}

export default IntroText