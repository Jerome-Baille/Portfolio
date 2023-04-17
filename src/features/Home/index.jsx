import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../../components/AnimatedLetters';
import Typewriter from "typewriter-effect";
// import ProjectsPreview from '../Projects/ProjectsPreview';
import Loader from 'react-loaders';
import BlogPreview from '../Blog/CertificationsContainer';
import { LanguageContext } from '../Layout';
import Projects from '../Projects/ProjectsContainer';
import Fr from '../../locales/fr.json';
import En from '../../locales/en.json';

const Home = () => {
    const { language } = useContext(LanguageContext);
    const [letterClass, setLetterClass] = useState('text-animate');
    const [data, setData] = useState();      

    useEffect(() => {
        language === 'fr' ? setData(Fr.home) : setData(En.home);

        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)

        console.log(data.greeting.split(''))
    }, [language])

    return (
        <>
        {data? (
            <div className="container home-page">
                <div className="inside-container">
                    <div className="text-zone">
                        <div className="main-text">
                            <h1>
                            <AnimatedLetters 
                                letterClass={letterClass} 
                                strArray={data.greeting.split('')} 
                                idx={12} 
                            />
                            <br />
                            <AnimatedLetters letterClass={letterClass} strArray={data.name.split('')} idx={15} />
                            <br />
                            <AnimatedLetters letterClass={letterClass} strArray={data.job.split('')} idx={20} />
                            </h1>
                            <Typewriter
                                onInit={(typewriter)=> {
                                    typewriter              
                                        .typeString(data.type1)
                                        .pauseFor(2000)
                                        .deleteAll()
        
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
                    <section className='section'>
                        <BlogPreview />
                    </section>
                    <section className='section'>
                        <Projects />
                    </section>
                </div>
            </div> 
        )
        : 
            <Loader type="pacman"/>
        }
        </>
    );
}

export default Home