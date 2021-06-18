import './index.css'
import SqliteImage from '../../../images/sqlite.png'

const SqliteLi = () => {
  return (
    <li>
      <img src={SqliteImage} className="skills-image sqlite-image" alt="sqlite"/>
      <p>SQLite</p>
    </li>
  )
}

export default SqliteLi