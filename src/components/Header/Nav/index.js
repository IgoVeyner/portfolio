import { useSelector } from 'react-redux'
import IconNav from '../IconNav'

const Navbar = () => {
  const theme = useSelector(state => state.theme)
  const linkColor = theme === "dark" ? "dark-link" : "light-link"

  return (
    <nav className="web-nav">
      <div className="web-nav-list">
        <a href="#project-1" className={`${linkColor}`}>Projects</a>
        <a href="#about" className={`${linkColor}`}>About</a>
        <a href="#skills" className={`${linkColor}`}>Skills</a>
        <a href="#contact" className={`${linkColor}`}>Contact</a>
      </div>
      <IconNav classNames={["web-icons"]} />
    </nav>
  )
}

export default Navbar