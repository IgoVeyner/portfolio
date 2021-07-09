import JavaScriptImage from '../../../images/javascript.png'

const JavaScriptLi = ({ textColor }) => {
  return (
    <li>
      <img src={JavaScriptImage} className="skills-image javascript-image" alt="javascript"/>
      <p className={textColor}>JavaScript <span className="javascript-small">(ES6)</span></p>
    </li>
  )
}

export default JavaScriptLi