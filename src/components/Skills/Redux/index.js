import './index.css'
import ReduxImage from '../../../images/redux.png'

const ReduxLi = () => {
  return (
    <li>
      <img src={ReduxImage} className="skills-image redux-image" alt="redux"/>
      <p>Redux</p>
      <div className="skills-progress redux-progress"></div>
    </li>
  )
}

export default ReduxLi