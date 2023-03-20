import { useContext, useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import { LanguageContext } from '../Layout'

const Contact = () => {
  const { language } = useContext(LanguageContext)
  const [page, setPage] = useState({})
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    const En = {
      title : ['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e'],
      subtitle: `If you want to know more about me or my projects, feel free to use the form below. \nI am looking for a fully remote front-end, back-end or full-stack job.`,
      form : {
        name: 'Name',
        email: 'E-mail',
        subject: 'Subject',
        message: 'Message',
        btnContact: 'SEND'
      }
    }

    const Fr = {
      title : ['C', 'o', 'n', 't', 'a', 'c', 't', 'e', 'z', ' ', 'M', 'o', 'i'],
      subtitle: 'Si vous voulez en savoir plus sur moi ou mes projets, n\'hésitez pas à utiliser le formulaire ci-dessous. \nJe recherche un emploi à temps plein en tant que développeur front-end, back-end ou full-stack.',
      form : {
        name: 'Nom',
        email: 'E-mail',
        subject: 'Sujet',
        message: 'Message',
        btnContact: 'ENVOYER'
      }
    }

    language === 'fr' ? setPage(Fr) : setPage(En)

    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [language])

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
  
  if(!page.title) {
    return <Loader type="pacman" />
  } else {
    return (
        <div className="container">
          <div className="contact-page">
            <header>
              <h1>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={page.title}
                  idx={15}
                />
              </h1>
            </header>
            <p>
              {page.subtitle}
            </p>
            <div className="contact-form">
              <form ref={form} onSubmit={sendEmail}>
                <label className="half">
                  <input placeholder={page.form.name} type="text" name="name" required />
                </label>
                <label className="half">
                  <input  placeholder={page.form.email} type="email" name="email" required />
                </label>
                <label>
                  <input placeholder={page.form.subject} type="text" name="subject" required />
                </label>
                <label>
                  <textarea placeholder={page.form.message} name="message" required />
                </label>
                <input type="submit" className="flat-button" value={page.form.btnContact} />
              </form>
            </div>
          </div>
        </div>
    )
  }

}

export default Contact
