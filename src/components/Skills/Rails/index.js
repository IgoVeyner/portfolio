import './index.css'
import RailsImage from '../../../images/Rails.png'

const RailsLi = () => {
  return (
    <li>
      <img src={RailsImage} className="skills-image rails-image" alt="rails"/>
      <p>Ruby on Rails</p>
      <div className="skills-progress rails-progress"></div>
    </li>
  )
}

export default RailsLi