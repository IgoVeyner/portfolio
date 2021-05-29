import './index.css'

const ThemeButton = ({ toggleTheme, classNames }) => {
  const [buttonName] = classNames

  return (
    <button 
      className={buttonName}
      onClick={null}
      >
      -theme-
    </button>
  )
}

export default ThemeButton