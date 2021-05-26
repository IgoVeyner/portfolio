import './index.css'
import Logo from '../Logo'
import Nav from '../Nav'
import IconNav from '../IconNav'
import MenuButton from '../MenuButton'

const Header = () => {
  return (
    <header className="navbar">
      <Logo />
      <Nav />
      <IconNav />
      <MenuButton />
    </header>
  )
}

export default Header