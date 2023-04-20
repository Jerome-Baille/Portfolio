import { useEffect } from 'react';
import { animateScroll, Element } from 'react-scroll';

import About from '../About/AboutContainer';
import Certifications from '../Certifications/CertificationsContainer';
import Contact from '../Contact/ContactContainer';
import Landing from '../Landing/LandingContainer';
import Projects from '../Projects/ProjectsContainer';

const HomePresentation = () => {
    useEffect(() => {
        const scrollPosition = sessionStorage.getItem('scrollPosition') || 0;
        animateScroll.scrollTo(scrollPosition);
    })

  return (
    <>
            <Element id="home">
                <Landing />
            </Element>
            <Element id="about">
                <About />
            </Element>
            <Element id="projects">
                <Projects />
            </Element>
            <Element id="certifications">
                <Certifications />
            </Element>
            <Element id="contact">
                <Contact />
            </Element>
    </>
  )
}

export default HomePresentation;