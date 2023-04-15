import { useEffect, useState } from 'react';
import AnimatedLetters from '../../components/AnimatedLetters'
import ContactFormContainer from './ContactForm/ContactFormContainer';

const ContactPresentation = ({ 
    contactData: { title, subtitle, form },
    onSubmit
}) => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [setLetterClass])

    return (
        <div className="container">
            <section className="contact-page inside-container">
                <header>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={title.split('')}
                            idx={15}
                        />
                    </h1>
                </header>
                <p>
                    {subtitle}
                </p>
                <ContactFormContainer 
                    formData={form} 
                />
            </section>
        </div>
    );
};

export default ContactPresentation;