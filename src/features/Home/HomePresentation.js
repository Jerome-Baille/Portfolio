import { useEffect, useState } from 'react';
import AnimatedLetters from '../../components/AnimatedLetters';
import Typewriter from "typewriter-effect";
import { Link } from 'react-router-dom';
import Certifications from '../Blog/CertificationsContainer';
import Projects from '../Projects/ProjectsContainer';

const HomePresentation = ({ homeData }) => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
    })

  return (
    <div className="container home-page">
        <div className="inside-container">
            <div className="text-zone">
                <div className="main-text">
                    <h1>
                    <AnimatedLetters 
                        letterClass={letterClass} 
                        strArray={homeData.greeting.split('')} 
                        idx={12} 
                    />
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={homeData.name.split('')} idx={15} />
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={homeData.job.split('')} idx={20} />
                    </h1>
                    <Typewriter
                        onInit={(typewriter)=> {
                            typewriter              
                                .typeString(homeData.type1)
                                .pauseFor(2000)
                                .deleteAll()

                                .typeString(homeData.type2)
                                .pauseFor(1000)
                                .deleteAll()

                                .typeString(homeData.type3)
                                .pauseFor(2000)
                                .deleteAll()

                                .start();
                        }}
                        options={{
                            loop: true
                        }}
                    />

                    <div className='main-btn'>
                        <Link to="/contact" className='flat-button'>{homeData.btnContact}</Link>
                        <Link to="/about" className='flat-button'>{homeData.btnAbout}</Link>
                    </div>
                </div>
            </div>
            <section className='section'>
                <Certifications />
            </section>
            <section className='section'>
                <Projects />
            </section>
        </div>
    </div> 
  )
}

export default HomePresentation;