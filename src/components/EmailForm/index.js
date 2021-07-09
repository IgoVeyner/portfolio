import emailjs from 'emailjs-com'
import { useSelector } from 'react-redux'
import { useRef, useState } from "react"

function EmailForm() {
  const [emailValue, setEmailValue] = useState("")
  const [messageValue, setMessageValue] = useState("")
  const [emailErrorState, setEmailError] = useState(null)
  const [messageErrorState, setMessageError] = useState(null)

  const theme = useSelector(state => state.theme)

  const emailInput = useRef(null)
  const emailError = useRef(null)
  const messageInput = useRef(null)
  const messageError = useRef(null)

  const [headerColor, inputColor, labelColor] = getStyles(theme)

  const focusEmail = () => emailInput.current.focus()
  const focusMessage = () => messageInput.current.focus()
  const checkValue = e => e === "" ? "" : "with-input" 

  const handleChange = e => {
    switch (e.target.name) {
      case 'email':
        checkEmail(e.target.value)
        setEmailValue(e.target.value)
        break
      
      case 'message':
        checkMessage(e.target.value)
        setMessageValue(e.target.value)
        break

      default:
        break
    }
  }

  const sendEmail = (e) => {
    e.preventDefault()
    
    checkEmail()
    checkMessage()

    if (emailErrorState === null || emailErrorState || 
        messageErrorState === null || messageErrorState) {
      return
    }
    
    emailjs.sendForm('service_qyp8yfr', 'template_dlyefrm', e.target, 
    'user_IGuFOYMswP5iM0AcORkLj')
      .then((result) => {
          console.log(result.text)
      }, (error) => {
          console.log(error.text)
      })

    e.target.reset()
  }

  const checkMessage = (message = messageValue) => {
    if (message.trim() !== "") {
      messageError.current.innerText = ""
      setMessageError(false)
    } else {
      messageError.current.innerText = "Please enter a message"
      setMessageError(true)
    }
  }

  const checkEmail = (email = emailValue) => {
    if (emailIsValid(email)) {
      emailError.current.innerText = ""
      setEmailError(false)
    } else {
      emailError.current.innerText = "Please enter a valid email address"
      setEmailError(true)
    }
  }

  const checkError = (error) => {
    if (error === null) {
      return ""
    } else if (error === true) {
      return "has-error"
    } else {
      return "valid"
    }
  }
  
  const emailIsValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  return (
    <section className="section section-email" id="contact">
      <form onSubmit={sendEmail} className="email-form">
        <h1 className={`contact-header ${headerColor}`}>Contact</h1>

        <div className="contact-input-container">
          <input 
            type="text" 
            name="email" 
            className={`contact-input ${inputColor}`}
            ref={emailInput} 
            onChange={handleChange}
            value={emailValue} 
            autoComplete="off"
          />
          <label 
            className={`
              contact-label 
              ${labelColor} 
              ${checkValue(emailValue)}
              ${checkError(emailErrorState)}
            `} 
            htmlFor="email" 
            onClick={focusEmail} >
            Email
          </label>
          <div 
            className="contact-error"
            ref={emailError}
          ></div>
        </div>

        <div className="contact-input-container">
          <input 
            type="text" 
            name="message" 
            className={`contact-input ${inputColor}`}
            ref={messageInput} 
            onChange={handleChange}
            value={messageValue} 
            autoComplete="off"
          />
          <label 
            className={`
              contact-label 
              ${labelColor} 
              ${checkValue(messageValue)}
              ${checkError(messageErrorState)}
            `} 
            htmlFor="message"
            onClick={focusMessage} >
            Message
          </label>
          <div 
            className="contact-error"
            ref={messageError}
          ></div>
        </div>

        <div className="contact-submit-container">
          <input type="submit" className="contact-submit"
            value="Send Message" />
        </div>
      </form>
    </section>
  )
}

const getStyles = (theme) => {

  if (theme === "dark") {
    return ["dark-title", "dark-contact-input", "dark-contact-label"]
  } else {
    return ["light-title", "light-contact-input", "light-contact-label"]
  }

}

export default EmailForm