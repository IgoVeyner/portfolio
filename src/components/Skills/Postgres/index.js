import './index.css'
import PostgresImage from '../../../images/PostgreSQL.png'

const PostgresLi = () => {
  return (
    <li>
      <img src={PostgresImage} className="skills-image postgres-image" alt="postgres"/>
      <p>Postgres</p>
    </li>
  )
}

export default PostgresLi