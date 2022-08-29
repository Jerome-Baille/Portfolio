import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import Typewriter from "typewriter-effect";
import Projects from '../Projects';
import Loader from 'react-loaders';
import Blog from '../Blog';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['I',"'","m"," ",'J', 'é', 'r', 'ô', 'm', 'e',','];
    const jobArray = ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.'];

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <div className="main-text">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br/>
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} />
                    </h1>
                    <Typewriter
                        onInit={(typewriter)=> {
                            typewriter              
                                .typeString("Front-End | Back-End")
                                .pauseFor(2000)
                                .deleteAll()

                                // .typeString("Back-End")
                                // .pauseFor(2000)
                                // .deleteAll()

                                // .typeString("Full stack")
                                // .pauseFor(2000)
                                // .deleteAll()

                                .typeString("Open for work")
                                .pauseFor(1000)
                                .deleteAll()

                                .typeString("Full remote only")
                                .pauseFor(2000)
                                .deleteAll()

                                .start();
                        }}
                        options={{
                            loop: true
                        }}
                    />

                    <div className='main-btn'>
                        <Link to="/contact" className='flat-button'>Let's Talk</Link>
                        <Link to="/about" className='flat-button'>Know More About Me</Link>
                    </div>
                </div>
            </div>
            <Blog />
            <Projects />
        </div> 
        <Loader type="pacman"/>
        </>
    );
}

export default Home