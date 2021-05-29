import './index.css'

const MobileNav = ({ menuExpanded }) => {
  let status = menuExpanded === "unmounting" ? "closed" : ""

  return (
    <nav className={`mobile-nav open ${status}`}>
      <div>
        temp
      </div>
    </nav>
  )
}

export default MobileNav