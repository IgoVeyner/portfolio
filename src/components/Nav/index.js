import "./index.css"
import IconNav from '../IconNav'

const Navbar = () => {
  return (
    <nav className="web-nav">
      <div className="web-nav-list">
        <a href="#" className="web-link">Projects</a>
        <a href="#" className="web-link">Blog</a>
        <a href="#" className="web-link">About</a>
        <a href="#" className="web-link">Contact</a>
      </div>
      <IconNav classNames={["web-icons"]} />
    </nav>
  )
}

export default Navbar