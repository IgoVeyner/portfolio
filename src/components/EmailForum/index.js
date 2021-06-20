import "./index.css"
import emailjs from 'emailjs-com'
import { useSelector } from 'react-redux'

function EmailForum() {
  const theme = useSelector(state => state.theme)

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
          <input type="text" name="email" className="contact-input" />
          <label className="contact-label" for="email">Email</label>
        </div>

        <div className="contact-input-container">
          <input type="text" name="message" className="contact-input" />
          <label className="contact-label" for="message">Message</label>
        </div>

        <div className="contact-submit-container">
          <input type="submit" />
        </div>
      </form>
    </section>
  )
}

export default EmailForum