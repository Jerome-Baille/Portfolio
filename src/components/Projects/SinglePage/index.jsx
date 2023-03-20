import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState, useContext } from 'react';
import AnimatedLetters from '../../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInternetExplorer } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Loader from "react-loaders";

import { getOneProject } from '../../../services/service';

import { LanguageContext } from '../../Layout';

const ProjectSinglePage = () => {
    const { language } = useContext(LanguageContext)

    const navigate = useNavigate();
    const { id } = useParams()
    const [project, setProject] = useState([])
    const [page, setPage] = useState({})
    const [letterClass, setLetterClass] = useState('text-animate');

    function setLanguage(props) {
        if(language === 'fr') {
            return props.fr
        } else {
            return props.en
        }
    }

    useEffect(() => {
        const En = {
            skills: 'Needed Skills',
            stack: 'Stack Used',
            improvement: 'Possible areas of improvement',
            back: 'Back'
        }

        const Fr = {
            skills: 'Compétences nécessaires',
            stack: 'Stack utilisée',
            improvement: 'Possibles améliorations',
            back: 'Retour'
        }

        getOneProject(id).then(data => {
            setProject(data)
            setPage(language === 'fr' ? Fr : En)
        }).catch(err => {
            console.log(err)
        })
    }, [id, language])

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    if(project.length !== 0) {
        return (
            <>
            <div className="container">
                <section className="single-project">
                    <button onClick={() =>navigate(-1)} className='flat-button mr0 back-left'>
                        <FontAwesomeIcon icon={faArrowLeft} />
                        <span> Back</span>
                    </button>
                    <div className="text-column">
                        <h1>
                            <AnimatedLetters
                                letterClass={letterClass}
                                strArray={Object.values(project.name)}
                                idx={15}
                            />
                        </h1> 
                        <div className="subtitle">
                            <h2>{setLanguage(project.subtitle)}</h2>
                        </div>
                        {setLanguage(project.descriptions).map((description, index) => (
                            <p key={index}>
                                {description}
                            </p>
                        ))}

                        <section className="skills">
                            <h3>
                                {page.skills}
                            </h3>

                            <ul>
                                {setLanguage(project.skills).map((skill, index) => (
                                    <li key={index}>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section className="stack">
                            <h3>
                                {page.stack}
                            </h3>
                            <div className="stack-container">
                                {project.stack.map((stack, index) => (
                                    <div className="stack-single" key={index}>
                                        <img src={process.env.PUBLIC_URL + stack.url} alt={stack.name} />                            
                                        <span>{stack.name}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                        <section className="improvement">
                            <h3>
                                {page.improvement}
                            </h3>
                            <ul>
                                {setLanguage(project.improvements).map((improvement, id) => (
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
                            <span> {page.back}</span>
                        </button>
                        {project.pictures.map((picture, index) => (
                            <div className="img-wraper" key={index}>
                                <img src={process.env.PUBLIC_URL + picture.url} alt={setLanguage(picture.alt)}/>
                            </div>
                        ))}

                        <footer>
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            {project.demo? <a href={project.demo} target="_blank" rel="noopener noreferrer" className="demo-link">
                                <FontAwesomeIcon icon={faInternetExplorer} />
                            </a> : null}
                        </footer>
                    </div>
                </section>
            </div>
            <Loader type="pacman"/>
            </>
        )
    }
}

export default ProjectSinglePage;