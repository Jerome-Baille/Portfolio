import emailjs from '@emailjs/browser'
import ContactForm from '../../../components/CustomForm'

const ContactFormContainer = ({ formData }) => {
    const handleFormSubmit = (values) => {
        emailjs
        .send(
            'service_pn9jjpq',
            'template_396vp3p',
            values,
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
    };

    return (
        <ContactForm 
            formData={formData} 
            onSubmit={handleFormSubmit}
        />
    )
}

export default ContactFormContainer