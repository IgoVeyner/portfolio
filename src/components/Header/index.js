import { useState, useEffect } from 'react'
import './index.css'
import Logo from '../Logo'
import Nav from '../Nav'
import MenuButton from '../MenuButton'
import MobileNav from '../MobileNav'

const Header = () => {

  const [menuExpanded, setMenuExpanded] = useState("unmounted")
  const time = 1000

  const toggleMenu = () => {
    if (menuExpanded === "mounted") {
      setMenuExpanded("unmounting")
    }
    else if (menuExpanded === "unmounted") {
      setMenuExpanded("mounting")
    }
  }

  useEffect(() => {
    let timeoutId

    if (menuExpanded === "mounting") {
      timeoutId = setTimeout(() => {
        setMenuExpanded("mounted");
      }, time);
    } else if (menuExpanded === "unmounting") {
      timeoutId = setTimeout(() => {
        setMenuExpanded("unmounted");
      }, time);
    }

    return () => {
      clearTimeout(timeoutId)
    }
  }, [menuExpanded]);

  return (
    <header className="navbar">
      <Logo />
      <Nav />
      { menuExpanded !== "unmounted" ?  <MobileNav menuExpanded={menuExpanded} /> : null }
      <MenuButton toggleMenu={toggleMenu} />
    </header>
  )
}

export default Header