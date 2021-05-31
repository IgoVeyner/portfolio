import "./index.css"
import { useSelector } from 'react-redux'
import Name from "../Name"
import TitleRotating from "../TitleRotating"
import TitleTyping from "../TitleTyping"

const IntroText = () => {
  const theme = useSelector(state => state.theme)

  let color, titleColor

  if (theme === "dark") {
    color = "dark-line"
    titleColor = "dark-title"
  } else {
    color = "light-line"
    titleColor = "light-title"
  }

  return (
    <section className="section">
      <div className="intro-title">
        <Name />
        <TitleRotating color={color} titleColor={titleColor} />
        <TitleTyping titleColor={titleColor} />
      </div>
    </section>
  )
}

export default IntroText