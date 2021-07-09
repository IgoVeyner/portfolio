import RailsImage from '../../../images/Rails.png'

const RailsLi = ({ textColor }) => {
  return (
    <li>
      <img src={RailsImage} className="skills-image rails-image" alt="rails"/>
      <p className={textColor}>Ruby <span className="rails-small">on</span> Rails</p>
    </li>
  )
}

export default RailsLi