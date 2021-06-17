import './index.css'
import CSSImage from '../../../images/css.png'

const CSSLi = () => {
  return (
    <li>
      <img src={CSSImage} className="skills-image css-image" alt="css"/>
      <p>CSS</p>
      <div className="skills-progress css-progress"></div>
    </li>
  )
}

export default CSSLi