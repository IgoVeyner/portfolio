import ReduxImage from '../../../images/redux.png'

const ReduxLi = ({ textColor }) => {
  return (
    <li>
      <img src={ReduxImage} className="skills-image redux-image" alt="redux"/>
      <p className={textColor}>Redux</p>
    </li>
  )
}

export default ReduxLi