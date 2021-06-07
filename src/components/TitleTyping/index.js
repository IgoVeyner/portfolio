import "./index.css"

const TitleTyping = ({ titleColor }) => {
  return (
    <div>
      <span className="linux">
          ~$
      </span> 
      <span className={`title-ending ${titleColor} terminal`}>
        Engineer
      </span>
    </div>
  )
}

export default TitleTyping