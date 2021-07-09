import RubyImage from '../../../images/ruby.png'

const RubyLi = ({ textColor }) => {
  return (
    <li>
      <img src={RubyImage} className="skills-image ruby-image" alt="ruby"/>
      <p className={textColor}>Ruby</p>
    </li>
  )
}

export default RubyLi