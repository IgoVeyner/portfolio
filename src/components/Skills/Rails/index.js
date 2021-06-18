import './index.css'
import RailsImage from '../../../images/Rails.png'

const RailsLi = () => {
  return (
    <li>
      <img src={RailsImage} className="skills-image rails-image" alt="rails"/>
      <p>Ruby on Rails</p>
    </li>
  )
}

export default RailsLi