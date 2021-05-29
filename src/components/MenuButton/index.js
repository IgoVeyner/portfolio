import './index.css'

const MenuButton = ({ toggleMenu }) => {
  return (
    <button 
      className="menu"
      onClick={toggleMenu}
      >
      MENU
    </button>
  )
}

export default MenuButton