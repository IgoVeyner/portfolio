import './index.css'
import Logo from '../Logo'
import Nav from '../Nav'
import MenuButton from '../MenuButton'

const Header = () => {
  return (
    <header className="navbar">
      <Logo />
      <Nav />
      <MenuButton />
    </header>
  )
}

export default Header