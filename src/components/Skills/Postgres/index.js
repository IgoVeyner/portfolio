import './index.css'
import PostgresImage from '../../../images/PostgreSQL.png'

const PostgresLi = () => {
  return (
    <li>
      <img src={PostgresImage} className="skills-image postgres-image" alt="postgres"/>
      <p>Postgres</p>
      <div className="skills-progress postgres-progress"></div>
    </li>
  )
}

export default PostgresLi