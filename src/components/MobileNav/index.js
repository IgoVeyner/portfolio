import './index.css'

const MobileNav = ({ menuExpanded }) => {
  let status = menuExpanded === "unmounting" ? "closed" : ""

  return (
    <nav className={`mobile-nav open ${status}`}>
      <a href="#" className="mobile-link">Projects</a>
      <a href="#" className="mobile-link">Blog</a>
      <a href="#" className="mobile-link">About</a>
      <a href="#" className="mobile-link">Contact</a>
    </nav>
  )
}

export default MobileNav