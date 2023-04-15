import { useContext, useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInternetExplorer } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';

import projectList from '../../assets/projectList.json';
import en from '../../locales/en.json';
import fr from '../../locales/fr.json';

import { LanguageContext } from '../Layout';

const Projects = () => {
    const { language } = useContext(LanguageContext)
    const [projects, setProjects] = useState([])
    const [page, setPage] = useState()

    function setLanguage(props) {
        if(language === 'fr') {
            return props.fr
        } else {
            return props.en
        }
    }

    useEffect(() => {
        setProjects(projectList)
        setPage(language === 'fr' ? fr.projects : en.projects)
      }, [language])

    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    if(projects.length === 0){
        return <Loader type="pacman"/>
    } else {
        return (
            <div className='container projects-page'>
                <section className='project-section'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={page.title.split('')}
                            idx={15}
                        />
                    </h1>
                    <p>
                        {page.subtitle}
                    </p>
                    <div className="projects-wrapper">
                    {Object.keys(projects).map((project, index) => (
                        <div className="flip-card-container" key={index}>
                            <div className="flip-card">
                                <div className="flip-card-front">
                                    <img src={process.env.PUBLIC_URL + projects[project].logo} alt={projects[project].name + ' logo'} />
                                </div>
                                <div className="flip-card-back">
                                    <h3>
                                        {projects[project].name}
                                    </h3>
                                    <p>{setLanguage(projects[project].subtitle)}</p>
                                    <p>{projects[project].tags}</p>
                                    <div className='card-footer'>
                                        <a href={projects[project].github} target="_blank" rel="noopener noreferrer" className='github-link' aria-label={projects[project].name + ' GitHub'}>
                                            <FontAwesomeIcon icon={faGithub} />
                                        </a>

                                        {projects[project].demo? 
                                            <a href={projects[project].demo} target="_blank" rel="noopener noreferrer" className='demo-link' aria-label={projects[project].name + ' live demo'}>
                                                <FontAwesomeIcon icon={faInternetExplorer} />
                                            </a> 
                                            : null 
                                        }
                                    </div>
                                    <Link to={`/projects/${projects[project].id}`} className="card-link" aria-label={'See more about ' + projects[project].name} />
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                </section>
            </div>
        )
    }
}

export default Projects