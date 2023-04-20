import { useEffect, useState } from 'react';
import AnimatedLetters from '../../components/AnimatedLetters';
import Typewriter from "typewriter-effect";
import { Link } from 'react-router-dom';


const LandingPresentation = ({landingData}) => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
    })

    return (
        <div className="text-zone section" id="home">
            <div className="main-text">
                <h1>
                <AnimatedLetters 
                    letterClass={letterClass} 
                    strArray={landingData.greeting.split('')} 
                    idx={12} 
                />
                <br />
                <AnimatedLetters letterClass={letterClass} strArray={landingData.name.split('')} idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass} strArray={landingData.job.split('')} idx={20} />
                </h1>
                <Typewriter
                    onInit={(typewriter)=> {
                        typewriter              
                            .typeString(landingData.type1)
                            .pauseFor(2000)
                            .deleteAll()

                            .typeString(landingData.type2)
                            .pauseFor(1000)
                            .deleteAll()

                            .typeString(landingData.type3)
                            .pauseFor(2000)
                            .deleteAll()

                            .start();
                    }}
                    options={{
                        loop: true
                    }}
                />

                <div className='main-btn'>
                    <Link to="/contact" className='flat-button'>{landingData.btnContact}</Link>
                    <Link to="/about" className='flat-button'>{landingData.btnAbout}</Link>
                </div>
            </div>
        </div>
    )
}

export default LandingPresentation;