import './index.css'
import IconNav from '../IconNav'
import ThemeButton from '../ThemeButton'
import { useSelector } from 'react-redux'

const MobileNav = ({ menuExpanded }) => {
  let status = menuExpanded === "unmounting" ? "closed" : ""
  const theme = useSelector(state => state.theme)

  const navTheme = theme === "dark" ? "nav-dark" : "nav-light"

  return (
    <nav className={`mobile-nav open ${status}`}>
      <a href="#" className="mobile-link">Projects</a>
      <a href="#" className="mobile-link">Blog</a>
      <a href="#" className="mobile-link">About</a>
      <a href="#" className="mobile-link">Contact</a>
      <IconNav classNames={["mobile-icons"]} />
      <ThemeButton classNames={["mobile-theme-button"]} />
    </nav>
  )
}

export default MobileNav