import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInternetExplorer } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';


const Projects = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        const urls = [
            "https://jerome-baille-portfolio.herokuapp.com/api/projects"
          ];
    
        const getData = async () => {
          const [projects] = await Promise.all(
            urls.map((url) => fetch(url)
              .then((res) => res.json()))
         );
         setProjects(projects);
        };
    
        getData();
      }, [])

    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    if(projects.length !== 0){
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
                                    <p>{projects[project].subtitle}</p>
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
            <Loader type="pacman"/>
            </>
        )
    }
}

export default Projects