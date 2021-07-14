import { useState } from 'react'
import { useSelector } from 'react-redux'
import useMenuAnimation from '../../Hooks/useMenuAnimation'
import Logo from './Logo'
import Nav from './Nav'
import MenuButton from '../Buttons/Menu'
import ThemeButton from '../Buttons/Theme'
import MobileNav from './MobileNav'

const Header = () => {

  const [menuExpanded, setMenuExpanded] = useState("unmounted")
  useMenuAnimation(menuExpanded, setMenuExpanded)
  
  const modalStatus = useSelector(state => state.modal)
  const hidden = modalStatus ? "hidden" : "" 

  const toggleMenu = () => {
    if (menuExpanded === "mounted") {
      setMenuExpanded("unmounting")
    }
    else if (menuExpanded === "unmounted") {
      setMenuExpanded("mounting")
    }
  }

  return (
    <header className={`navbar ${hidden}`}>
      <Logo />
      <Nav />
      { menuExpanded !== "unmounted" ?  <MobileNav menuExpanded={menuExpanded} /> : null }
      <MenuButton toggleMenu={toggleMenu} menuExpanded={menuExpanded}/>
      <ThemeButton classNames={["theme-button"]} />
    </header>
  )
}

export default Header