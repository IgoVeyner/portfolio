import jQueryImage from '../../../images/jQuery.png'

const JQueryLi = ({ textColor }) => {
  return (
    <li>
      <img src={jQueryImage} className="skills-image jQuery-image" alt="jQuery"/>
      <p className={textColor}>jQuery</p>
    </li>
  )
}

export default JQueryLi