import { useSelector } from 'react-redux'
import Name from "../IntroTitle/Name"
import TitleRotating from "./TitleRotating"
import TitleTyping from "./TitleTyping"

const IntroTitle = () => {
  const theme = useSelector(state => state.theme)
  const [color, titleColor] = getStyles(theme)

  return (
    <section className="section" id="intro">
      <div className="intro-title">
        <Name />
        <TitleRotating color={color} titleColor={titleColor} />
        <TitleTyping titleColor={titleColor} />
      </div>
    </section>
  )
}

const getStyles = (theme) => {

  if (theme === "dark") {
    return ["dark-line", "dark-title"]
  } else {
    return ["light-line", "light-title"]
  }

}

export default IntroTitle