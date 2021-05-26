import './index.css'
import Logo from '../Logo'
import Nav from '../Nav'
import IconNav from '../IconNav'

const Header = () => {
  return (
    <header className="navbar">
      <Logo />
      <Nav />
      <IconNav />
    </header>
  )
}

export default Header