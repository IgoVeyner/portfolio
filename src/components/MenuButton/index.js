import { useSelector } from 'react-redux'
import './index.css'

const MenuButton = ({ toggleMenu, menuExpanded }) => {
  const theme = useSelector(state => state.theme)
  const menuColor = theme === "dark" ? "dark-menu" : "light-menu"
  const menuBGColor = theme === "dark" ? "dark-bg-menu" : "light-bg-menu"

  const cases = ["unmounted", "unmounting"]
  const menuStatus = cases.includes(menuExpanded) ? "" : "menu-open"
  
  return (
    <div 
      className={`menu ${menuStatus} ${menuBGColor}`}
      onClick={toggleMenu}
      >
      <div class="hamburger" >
        <span class={`menu-line ${menuColor}`}></span>
        <span class={`menu-line ${menuColor}`}></span>
        <span class={`menu-line ${menuColor}`}></span>
      </div>
    </div>
  )
}

export default MenuButton