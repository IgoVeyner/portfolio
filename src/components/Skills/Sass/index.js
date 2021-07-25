import SassImage from '../../../images/sass.png'

const SassLi = ({ textColor }) => {
  return (
    <li>
      <img src={SassImage} className="skills-image sass-image" alt="sass"/>
      <p className={textColor}>Sass / Scss</p>
    </li>
  )
}

export default SassLi