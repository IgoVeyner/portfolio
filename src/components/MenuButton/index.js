import './index.css'

const MenuButton = ({ toggleMenu, menuExpanded }) => {
  const cases = ["unmounted", "unmounting"]
  const menuStatus = cases.includes(menuExpanded) ? "" : "menu-open"
  
  return (
    <div 
      className={`menu ${menuStatus}`}
      onClick={toggleMenu}
      >
      <div class="hamburger" >
        <span class="menu-line"></span>
        <span class="menu-line"></span>
        <span class="menu-line"></span>
      </div>
    </div>
  )
}

export default MenuButton