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
    <section className="section section-email" >
      <form onSubmit={sendEmail}>
        <input type="text" name="email"/>
        <input type="text" name="message"/>
        <input type="submit" />
      </form>
    </section>
  )
}

export default EmailForum