import "./index.css"
import emailjs from 'emailjs-com'
import { useSelector } from 'react-redux'
import { useRef, useState } from "react"

function EmailForm() {
  const [emailValue, setEmailValue] = useState("")
  const [messageValue, setMessageValue] = useState("")
  const theme = useSelector(state => state.theme)
  const emailInput = useRef(null)
  const messageInput = useRef(null)

  const focusEmail = () => emailInput.current.focus()
  const focusMessage = () => messageInput.current.focus()

  const checkValue = e => e === "" ? "" : "with-input" 

  let [headerColor, inputColor] = ["dark-contact-header", "dark-contact-input"]

  if (theme === "light") {
    [headerColor, inputColor] = ["light-contact-header", "light-contact-input"]
  }

  const handleChange = e => {
    switch (e.target.name) {
      case 'email':
        setEmailValue(e.target.value)
        break
      
      case 'message':
        setMessageValue(e.target.value)
        break

      default:
        break
    }
  }

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_qyp8yfr', 'template_dlyefrm', e.target, 
    'user_IGuFOYMswP5iM0AcORkLj')
      .then((result) => {
          console.log(result.text)
      }, (error) => {
          console.log(error.text)
      })

    e.target.reset()
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
            className={`contact-label ${checkValue(emailValue)}`} 
            htmlFor="email" 
            onClick={focusEmail} >
            Email
          </label>
        </div>

        <div className="contact-input-container">
          <input 
            type="text" 
            name="message" 
            className={`contact-input ${inputColor}`}
            ref={messageInput} 
            onChange={handleChange} 
            value={messageValue} />
          <label 
            className={`contact-label ${checkValue(messageValue)}`} 
            htmlFor="message"
            onClick={focusMessage} >
            Message
          </label>
        </div>

        <div className="contact-submit-container">
          <input type="submit" className="contact-submit"
            value="Send Message" />
        </div>
      </form>
    </section>
  )
}

export default EmailForm