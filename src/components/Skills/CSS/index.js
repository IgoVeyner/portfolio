import './index.css'
import CSSImage from '../../../images/css.png'

const CSSLi = () => {
  return (
    <li>
      <img src={CSSImage} className="skills-image css-image" alt="css"/>
      <p>CSS</p>
    </li>
  )
}

export default CSSLi