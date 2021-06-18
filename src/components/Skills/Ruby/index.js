import './index.css'
import RubyImage from '../../../images/ruby.png'

const RubyLi = () => {
  return (
    <li>
      <img src={RubyImage} className="skills-image ruby-image" alt="ruby"/>
      <p>Ruby</p>
    </li>
  )
}

export default RubyLi