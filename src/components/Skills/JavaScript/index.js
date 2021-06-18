import './index.css'
import JavaScriptImage from '../../../images/javascript.png'

const JavaScriptLi = () => {
  return (
    <li>
      <img src={JavaScriptImage} className="skills-image javascript-image" alt="javascript"/>
      <p>JavaScript <span className="javascript-small">(ES6)</span></p>
    </li>
  )
}

export default JavaScriptLi