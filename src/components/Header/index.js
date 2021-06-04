import { useState } from 'react'
import useMenuAnimation from '../../Hooks/useMenuAnimation'
import './index.css'
import Logo from '../Logo'
import Nav from '../Nav'
import MenuButton from '../MenuButton'
import ThemeButton from '../ThemeButton'
import MobileNav from '../MobileNav'

const Header = () => {

  const [menuExpanded, setMenuExpanded] = useState("unmounted")
  useMenuAnimation(menuExpanded, setMenuExpanded)

  const toggleMenu = () => {
    if (menuExpanded === "mounted") {
      setMenuExpanded("unmounting")
    }
    else if (menuExpanded === "unmounted") {
      setMenuExpanded("mounting")
    }
  }

  return (
    <header className="navbar">
      <Logo />
      <Nav />
      { menuExpanded !== "unmounted" ?  <MobileNav menuExpanded={menuExpanded} /> : null }
      <MenuButton toggleMenu={toggleMenu} menuExpanded={menuExpanded}/>
      <ThemeButton classNames={["theme-button"]} />
    </header>
  )
}

export default Header