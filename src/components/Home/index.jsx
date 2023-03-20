import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import Typewriter from "typewriter-effect";
import Projects from '../Projects';
import Loader from 'react-loaders';
import Blog from '../Blog';
import { LanguageContext } from '../Layout';

const Home = () => {
    const { language } = useContext(LanguageContext);
    const [letterClass, setLetterClass] = useState('text-animate');
    const [data, setData] = useState();

    useEffect(() => {
        const En = {
            'greeting': ['H', 'e', 'l', 'l', 'o', ','],
            'name': ['I',"'","m"," ",'J', 'é', 'r', 'ô', 'm', 'e',','],
            'job': ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.'],
            'type1': "Front-End | Back-End",
            'type2': "Open for work",
            'type3': "Full remote only",
            'btnContact': 'Let\'s Talk',
            'btnAbout': 'Know More About Me'
        }

        const Fr = {
            'greeting': ['B', 'o', 'n', 'j', 'o', 'u', 'r', ','],
            'name': ['J','e',' ','s','u','i','s',' ','J','é','r','ô','m','e',','],
            'job': ['D', 'é', 'v', 'e', 'l', 'o', 'p', 'p', 'e', 'u', 'r', ' ', 'W', 'e', 'b', '.'],
            'type1': "Front-End | Back-End",
            'type2': "A l'écoute d'opportunités",
            'type3': "Télétravail à 100%",
            'btnContact': 'Discutons',
            'btnAbout': 'En Savoir Plus'
        }

        language === 'fr' ? setData(Fr) : setData(En);

        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
    }, [language])

    return (
        <>
        {data? (
            <div className="container home-page">
                <div className="text-zone">
                    <div className="main-text">
                        <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={data.greeting} idx={12} />
                        <br />
                        <AnimatedLetters letterClass={letterClass} strArray={data.name} idx={15} />
                        <br />
                        <AnimatedLetters letterClass={letterClass} strArray={data.job} idx={20} />
                        </h1>
                        <Typewriter
                            onInit={(typewriter)=> {
                                typewriter              
                                    .typeString(data.type1)
                                    .pauseFor(2000)
                                    .deleteAll()
    
                                    // .typeString("Back-End")
                                    // .pauseFor(2000)
                                    // .deleteAll()
    
                                    // .typeString("Full stack")
                                    // .pauseFor(2000)
                                    // .deleteAll()
    
                                    .typeString(data.type2)
                                    .pauseFor(1000)
                                    .deleteAll()
    
                                    .typeString(data.type3)
                                    .pauseFor(2000)
                                    .deleteAll()
    
                                    .start();
                            }}
                            options={{
                                loop: true
                            }}
                        />
    
                        <div className='main-btn'>
                            <Link to="/contact" className='flat-button'>{data.btnContact}</Link>
                            <Link to="/about" className='flat-button'>{data.btnAbout}</Link>
                        </div>
                    </div>
                </div>
                <Blog />
                <Projects />
            </div> 
        )
        : 
            <Loader type="pacman"/>
        }
        </>
    );
}

export default Home