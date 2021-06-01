import { useSelector } from 'react-redux'
import "./index.css"
import IconNav from '../IconNav'

const Navbar = () => {
  const theme = useSelector(state => state.theme)
  const linkColor = theme === "dark" ? "dark-link" : "light-link"

  return (
    <nav className="web-nav">
      <div className="web-nav-list">
        <a href="#projects" className={`web-link ${linkColor}`}>Projects</a>
        <a href="#about" className={`web-link ${linkColor}`}>About</a>
        <a href="#contact" className={`web-link ${linkColor}`}>Contact</a>
      </div>
      <IconNav classNames={["web-icons"]} />
    </nav>
  )
}

export default Navbar