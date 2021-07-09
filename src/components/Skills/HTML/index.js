import HTMLImage from '../../../images/html5.png'

const HTMLLi = ({ textColor }) => {
  return (
    <li>
      <img src={HTMLImage} className="skills-image html-image" alt="html"/>
      <p className={textColor}>HTML 5</p>
    </li>
  )
}

export default HTMLLi