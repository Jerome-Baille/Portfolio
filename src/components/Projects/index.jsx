import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInternetExplorer } from "@fortawesome/free-brands-svg-icons";
import data from '../../assets/en.json'
import { Link } from 'react-router-dom';


const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
        <div className='container projects-page'>
            <section className='project-section'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['M', 'y', ' ', 'C', 'u', 'r', 'a', 't', 'e', 'd', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                        idx={15}
                    />
                </h1>
                <p>
                    A small collection of recent projects I have worked on to get a better understanding of my skills and abilities.
                    I have done them all together with amazin people. Please note that with the exception of the Groupomania project, I did not create the design of the website.
                </p>
                <div className="projects-wrapper">
                {Object.keys(data.Projects).map((project, index) => (
                    <div className="flip-card-container" key={index}>
                        <div className="flip-card">
                            <div className="flip-card-front">
                                <img src={process.env.PUBLIC_URL + data.Projects[project].logo} alt={data.Projects[project].name + ' logo'} />
                            </div>
                            <div className="flip-card-back">
                                <h3>
                                    {data.Projects[project].name}
                                </h3>
                                <p>{data.Projects[project].subtitle}</p>
                                <p>{data.Projects[project].tags}</p>
                                <div className='card-footer'>
                                    <a href={data.Projects[project].github} target="_blank" rel="noopener noreferrer" className='github-link' aria-label={data.Projects[project].name + ' GitHub'}>
                                        <FontAwesomeIcon icon={faGithub} />
                                    </a>

                                    {data.Projects[project].demo? 
                                        <a href={data.Projects[project].demo} target="_blank" rel="noopener noreferrer" className='demo-link' aria-label={data.Projects[project].name + ' live demo'}>
                                            <FontAwesomeIcon icon={faInternetExplorer} />
                                        </a> 
                                        : null 
                                    }
                                </div>
                                <Link to={`/projects/${data.Projects[project].id}`} className="card-link" aria-label={'See more about ' + data.Projects[project].name} />
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </section>
        </div>
        <Loader type="pacman"/>
        </>
    )
}

export default Projects