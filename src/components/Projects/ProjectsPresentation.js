import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInternetExplorer } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';

const ProjectsPresentation = ({ 
    projectDataGeneric, 
    projectsDataLocale 
}) => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
        setLetterClass('text-animate-hover');
        }, 4000);
    }, []);

    return (
        <div className='container projects-page'>
            <section className='project-section inside-container'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={projectsDataLocale.title.split('')}
                        idx={15}
                    />
                </h1>
                <p>
                    {projectsDataLocale.subtitle}
                </p>
                <div className="projects-wrapper--preview">
                {Object.keys(projectDataGeneric).map((project, index) => (
                    <div className="flip-card-container" key={index}>
                        <div className="flip-card">
                            <div className="flip-card-front">
                                <img src={process.env.PUBLIC_URL + projectDataGeneric[project].logo} alt={projectsDataLocale[project].title + ' logo'} />
                            </div>
                            <div className="flip-card-back">
                                <h3>
                                    {projectsDataLocale[project].title}
                                </h3>
                                <p>{projectsDataLocale[project].subtitle}</p>
                                <p>{projectDataGeneric[project].tags.split(',').map(item => `#${item.trim()}`).join(' ')}</p>
                                <div className='card-footer'>
                                    <a 
                                        href={projectDataGeneric[project].github} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className='github-link' 
                                        aria-label={projectsDataLocale[project].title + ' GitHub'}
                                    >
                                        <FontAwesomeIcon icon={faGithub} />
                                    </a>

                                    {projectDataGeneric[project].demo? 
                                        <a 
                                            href={projectDataGeneric[project].demo} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className='demo-link' 
                                            aria-label={projectsDataLocale[project].title + ' live demo'}
                                        >
                                            <FontAwesomeIcon icon={faInternetExplorer} />
                                        </a> 
                                        : null 
                                    }
                                </div>
                                <Link 
                                    to={`/projects/${projectDataGeneric[project].id}`} 
                                    className="card-link" 
                                    aria-label={'See more about ' + projectsDataLocale[project].title} 
                                />
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </section>
    </div>
    );
};

export default ProjectsPresentation;