import "./index.css"

const IconNav = ({ classNames }) => {
  const [navName] = classNames

  return (
    <nav className={navName} >
      <p>-Icon-</p>
      <p>-Icon-</p>
      <p>-Icon-</p>
    </nav>
  )
}

export default IconNav