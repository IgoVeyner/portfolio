import "./index.css"
import { useSelector } from 'react-redux'
import Name from "../Name"
import Title from "../Title"

const IntroText = () => {
  const theme = useSelector(state => state.theme)
  const color = theme === "dark" ? "light-line" : "dark-line" 

  return (
    <section className="section">
      <div className="intro-title">
        <Name />
        <Title color={color}/>
      </div>
    </section>
  )
}

export default IntroText