import { useEffect } from 'react';
import { animateScroll, Element } from 'react-scroll';

import About from '../About/AboutContainer';
import Certifications from '../Blog/CertificationsContainer';
import Contact from '../Contact/ContactContainer';
import Landing from '../Landing/LandingContainer';
import Projects from '../Projects/ProjectsContainer';

const HomePresentation = () => {
    useEffect(() => {
        const scrollPosition = sessionStorage.getItem('scrollPosition') || 0;
        animateScroll.scrollTo(scrollPosition);
    })

  return (
    <div className="container home-page">
        <div className="inside-container">
            <Element id="home" className='section'>
                <Landing />
            </Element>
            <Element id="about" className='section'>
                <About />
            </Element>
            <Element id="projects" className='section'>
                <Projects />
            </Element>
            <Element id="certifications" className='section'>
                <Certifications />
            </Element>
            <Element id="contact" className='section'>
                <Contact />
            </Element>
        </div>
    </div> 
  )
}

export default HomePresentation;