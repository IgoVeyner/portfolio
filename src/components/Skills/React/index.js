import './index.css'
import ReactImage from '../../../images/React.png'

const ReactLi = () => {
  return (
    <li>
      <img src={ReactImage} className="react-image" alt="React"/>
      <p>React</p>
      <div className="react-progress"></div>
    </li>
  )
}

export default ReactLi