import './index.css'
import jQueryImage from '../../../images/jQuery.png'

const JQueryLi = () => {
  return (
    <li>
      <img src={jQueryImage} className="skills-image jQuery-image" alt="jQuery"/>
      <p>jQuery</p>
      <div className="skills-progress jQuery-progress"></div>
    </li>
  )
}

export default JQueryLi