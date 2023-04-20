import React, { useEffect, useRef } from 'react';
import ContactFormContainer from './ContactForm/ContactFormContainer';

import './contact.scss';

const ContactPresentation = ({ 
    contactData: { title, subtitle, form },
    onSubmit
}) => {
    const componentRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    componentRef.current.classList.add('animate');
                } 
            });
        });
        observer.observe(componentRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div className="container" ref={componentRef}>
            <section className="contact__section inside-container">
                <header className='contact__header'>
                    <h1>
                        {title}
                    </h1>
                    <p>
                        {subtitle}
                    </p>
                </header>

                <section
                    className='contact__section__form-animation'
                >
                    <ContactFormContainer 
                        formData={form} 
                        onSubmit={onSubmit}
                    />
                </section>
            </section>
        </div>
    );
};

export default ContactPresentation;