import { useSelector } from 'react-redux'
import GithubIcon from '../../Icons/Github'
import LinkedInIcon from '../../Icons/LinkedIn'
import MediumIcon from '../../Icons/Medium'

const IconNav = ({ classNames }) => {
  const [navName] = classNames
  const theme = useSelector(state => state.theme)
  const iconColor = theme === "dark" ? "dark-icon" : "light-icon"

  return (
    <nav className={navName} >
      <MediumIcon link="https://igor-veyner.medium.com/" iconColor={iconColor} />
      <GithubIcon link="https://github.com/IgoVeyner" iconColor={iconColor} />
      <LinkedInIcon link="https://www.linkedin.com/in/igorveyner/" iconColor={iconColor} />
    </nav>
  )
}

export default IconNav