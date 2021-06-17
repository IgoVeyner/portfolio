import './index.css'
import JavaScriptImage from '../../../images/javascript.png'

const JavaScriptLi = () => {
  return (
    <li>
      <img src={JavaScriptImage} className="skills-image javascript-image" alt="javascript"/>
      <p>JavaScript <div className="javascript-small">(ES6)</div></p>
      <div className="skills-progress javascript-progress"></div>
    </li>
  )
}

export default JavaScriptLi