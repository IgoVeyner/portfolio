import './index.css'

const MenuButton = ({ toggleMenu }) => {
  return (
    <div 
      className="menu"
      onClick={toggleMenu}
      >
      <div class="hamburger" >
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
      </div>
    </div>
  )
}

export default MenuButton