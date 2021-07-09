import ReactImage from '../../../images/React.png'

const ReactLi = ({ textColor }) => {
  return (
    <li>
      <img src={ReactImage} className="skills-image react-image" alt="React"/>
      <p className={textColor}>React</p>
    </li>
  )
}

export default ReactLi