import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_pn9jjpq',
        'template_396vp3p',
        form.current,
        'qB7TpUDmabvmgndWA'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container">
        <div className="contact-page">
          <header>
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                idx={15}
              />
            </h1>
          </header>
          <p>
            If you want to know more about me or my projects, feel free to use the form below.
          </p>
          <p>
            I am looking for a fully remote front-end, back-end or full-stack job.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <label className="half">
                <input placeholder="Name" type="text" name="name" required />
              </label>
              <label className="half">
                <input  placeholder="Email" type="email" name="email" required />
              </label>
              <label>
                <input placeholder="Subject" type="text" name="subject" required />
              </label>
              <label>
                <textarea placeholder="Message" name="message" required />
              </label>
              <input type="submit" className="flat-button" value="SEND" />
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
