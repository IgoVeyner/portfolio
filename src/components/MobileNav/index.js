import './index.css'

const MobileNav = ({ menuExpanded }) => {
  let status = ""
  if (menuExpanded === "unmounting") {
    status = "closed"
  }

  return (
    <nav className={`mobile-nav open ${status}`}>
      <div>
        temp
      </div>
    </nav>
  )
}

export default MobileNav