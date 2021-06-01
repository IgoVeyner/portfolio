import "./index.css"
import IconNav from '../IconNav'

const Navbar = () => {
  return (
    <nav className="web-nav">
      <div className="web-nav-list">
        <a href="#projects" className="web-link">Projects</a>
        <a href="#about" className="web-link">About</a>
        <a href="#contact" className="web-link">Contact</a>
      </div>
      <IconNav classNames={["web-icons"]} />
    </nav>
  )
}

export default Navbar