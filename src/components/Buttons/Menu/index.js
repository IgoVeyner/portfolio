import { useSelector } from 'react-redux'

const MenuButton = ({ toggleMenu, menuExpanded }) => {
  const theme = useSelector(state => state.theme)
  const [menuColor, menuBGColor] = getStyles(theme)

  const cases = ["unmounted", "unmounting"]
  const menuStatus = cases.includes(menuExpanded) ? "" : "menu-open"
  
  return (
    <div 
      className={`menu ${menuStatus} ${menuBGColor}`}
      onClick={toggleMenu}
      >
      <div className="hamburger" >
        <span className={`menu-line ${menuColor}`}></span>
        <span className={`menu-line ${menuColor}`}></span>
        <span className={`menu-line ${menuColor}`}></span>
      </div>
    </div>
  )
}

const getStyles = (theme) => {

  if (theme === "dark") {
    return ["dark-menu", "dark-bg-menu"]
  } else {
    return ["light-menu", "light-bg-menu"]
  }

}

export default MenuButton