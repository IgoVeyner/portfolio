import { useState } from 'react'
import './index.css'
import Logo from '../Logo'
import Nav from '../Nav'
import MenuButton from '../MenuButton'

const Header = () => {

  const [menuExpanded, setMenuExpanded] = useState(false)

  const toggleMenu = () => setMenuExpanded(!menuExpanded)

  return (
    <header className="navbar">
      <Logo />
      <Nav />
      <MenuButton toggleMenu={toggleMenu} />
    </header>
  )
}

export default Header