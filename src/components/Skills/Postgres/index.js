import PostgresImage from '../../../images/PostgreSQL.png'

const PostgresLi = ({ textColor }) => {
  return (
    <li>
      <img src={PostgresImage} className="skills-image postgres-image" alt="postgres"/>
      <p className={textColor}>Postgres</p>
    </li>
  )
}

export default PostgresLi