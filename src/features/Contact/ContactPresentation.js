import ContactFormContainer from './ContactForm/ContactFormContainer';

const ContactPresentation = ({ 
    contactData: { title, subtitle, form },
    onSubmit
}) => {
    return (
        <div className="container">
            <section className="contact-page inside-container">
                <header>
                    <h1>
                        {title}
                    </h1>
                </header>
                <p>
                    {subtitle}
                </p>
                <section className='animation-container'>
                    <ContactFormContainer 
                        formData={form} 
                    />
                </section>
            </section>
        </div>
    );
};

export default ContactPresentation;