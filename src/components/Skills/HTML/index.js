import './index.css'
import HTMLImage from '../../../images/html5.png'

const HTMLLi = () => {
  return (
    <li>
      <img src={HTMLImage} className="skills-image html-image" alt="html"/>
      <p>HTML 5</p>
      <div className="skills-progress html-progress"></div>
    </li>
  )
}

export default HTMLLi