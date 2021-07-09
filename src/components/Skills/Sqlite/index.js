import SqliteImage from '../../../images/sqlite.png'

const SqliteLi = ({ textColor }) => {
  return (
    <li>
      <img src={SqliteImage} className="skills-image sqlite-image" alt="sqlite"/>
      <p className={textColor}>SQLite</p>
    </li>
  )
}

export default SqliteLi