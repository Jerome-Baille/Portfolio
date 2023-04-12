import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import AnimatedLetters from '../../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInternetExplorer } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
// import { Link } from 'react-router-dom';

const ProjectsDetailPresentation = ({ 
    projectDataGeneric, 
    projectsDataLocale,
    technologyList
}) => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
        setLetterClass('text-animate-hover');
        }, 4000);
    }, []);

    const handleTagsLink = (tag, index) => {
        const matchingItem = Object.values(technologyList).find(item => item.id.toUpperCase() === tag.trim().toUpperCase());
        if (matchingItem) {
          return (
            <div className="stack-single" key={index}>
                <img src={process.env.PUBLIC_URL + matchingItem.url} alt={matchingItem.name} />
                <span>{matchingItem.name}</span>
            </div>
          )
        } 
      }      

    return (
        <div className="container">
            <section className="single-project">
                <button onClick={() =>navigate(-1)} className='flat-button mr0 back-left'>
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <span> {projectsDataLocale.backBtn}</span>
                </button>
                <div className="text-column">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={projectsDataLocale.title.split('')}
                            idx={15}
                        />
                    </h1> 
                    <div className="subtitle">
                        <h2>{projectsDataLocale.subtitle}</h2>
                    </div>
                    {projectsDataLocale.descriptions.split('\n').map((sentence, index) => {
                        return <p key={index}>{sentence}</p>
                    })}
                    <section className="skills">
                        <h3>
                            {projectsDataLocale.skillsTitle}
                        </h3>

                        <ul>
                            {(projectsDataLocale.skills).map((skill, index) => (
                                <li key={index}>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="stack">
                        <h3>
                            {projectsDataLocale.stackTitle}
                        </h3>
                        <div className="stack-container">
                            {(projectDataGeneric.tags.split(',')).map((stack, index) => (
                                    handleTagsLink(stack, index)
                            ))}
                        </div>
                    </section>
                    <section className="improvement">
                        <h3>
                            {projectsDataLocale.improvementTitle}
                        </h3>
                        <ul>
                            {(projectsDataLocale.improvements).map((improvement, id) => (
                                <li key={id}>
                                    {improvement}
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
                <div className="img-column">
                    <button onClick={() =>navigate(-1)} className='flat-button mr0 back-right'>
                        <FontAwesomeIcon icon={faArrowLeft} />
                        <span> {projectsDataLocale.backBtn}</span>
                    </button>
                    {Object.keys(projectDataGeneric.pictures).map((picture, index) => (
                        <div className="img-wraper" key={index}>
                            <img src={process.env.PUBLIC_URL + projectDataGeneric.pictures[picture].url} alt={projectsDataLocale.pictures[picture].alt}/>
                        </div>
                    ))}

                    <footer>
                        <a 
                            href={projectDataGeneric.github} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="github-link"
                        >
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        {projectDataGeneric.demo? 
                            <a 
                                href={projectDataGeneric.demo} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="demo-link"
                            >
                                <FontAwesomeIcon icon={faInternetExplorer} />
                            </a> 
                        : null}
                    </footer>
                </div>
            </section>
        </div>
    );
};

export default ProjectsDetailPresentation;