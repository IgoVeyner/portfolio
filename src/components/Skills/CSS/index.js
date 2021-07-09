import CSSImage from '../../../images/css.png'

const CSSLi = ({ textColor }) => {
  return (
    <li>
      <img src={CSSImage} className="skills-image css-image" alt="css"/>
      <p className={textColor}>CSS</p>
    </li>
  )
}

export default CSSLi