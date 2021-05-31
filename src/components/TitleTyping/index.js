import "./index.css"

const TitleTyping = ({ titleColor }) => {
  return (
    <span className={`title-ending ${titleColor}`}>
      <span className="linux">
        ~$
      </span> 
      Engineer
    </span>
  )
}

export default TitleTyping