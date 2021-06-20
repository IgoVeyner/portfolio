import "./index.css"
import emailjs from 'emailjs-com'
import { useSelector } from 'react-redux'
import { useRef, useState } from "react"

function EmailForum() {
  const [emailValue, setEmailValue] = useState("")
  const [messageValue, setMessageValue] = useState("")
  const theme = useSelector(state => state.theme)
  const emailInput = useRef(null)
  const messageInput = useRef(null)

  const focusEmail = () => emailInput.current.focus()
  const focusMessage = () => messageInput.current.focus()

  const checkValue = e => e === "" ? "" : "with-input" 

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

    // emailjs.sendForm('service_qyp8yfr', 'template_dlyefrm', e.target, 
    // 'user_IGuFOYMswP5iM0AcORkLj')
    //   .then((result) => {
    //       console.log(result.text)
    //   }, (error) => {
    //       console.log(error.text)
    //   })

    e.target.reset()
  }

  return (
    <section className="section section-email" id="contact">
      <form onSubmit={sendEmail} className="email-form">
        <h1 className="contact-header">Contact</h1>

        <div className="contact-input-container">
          <input 
            type="text" 
            name="email" 
            className="contact-input"
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
            className="contact-input"
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
          <input type="submit" />
        </div>
      </form>
    </section>
  )
}

export default EmailForum