import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import AnimatedLetters from '../../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInternetExplorer } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import data from '../../../assets/en.json'
import Loader from "react-loaders";

const ProjectSinglePage = () => {
    const { id } = useParams()
    const navigate = useNavigate();

    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
        <div className="container">
            <section className="single-project">
                <div className="text-column">
                    <button onClick={() =>navigate(-1)} className='flat-button mr0 back-left'>
                        <FontAwesomeIcon icon={faArrowLeft} />
                        <span> Back</span>
                    </button>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={Object.values(data.Projects[id].name)}
                            idx={15}
                        />
                    </h1> 
                    <div className="subtitle">
                        <h2>{data.Projects[id].subtitle}</h2>
                    </div>
                    {data.Projects[id].descriptions.map((description, index) => (
                        <p key={index}>
                            {description}
                        </p>
                    ))}

                    <section className="skills">
                        <h3>
                            Needed Skills
                        </h3>

                        <ul>
                            {data.Projects[id].skills.map((skill, index) => (
                                <li key={index}>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="stack">
                        <h3>
                            Stack Used
                        </h3>
                        <div className="stack-container">
                            {data.Projects[id].stack.map((stack, index) => (
                                <div className="stack-single" key={index}>
                                    <img src={process.env.PUBLIC_URL + stack.url} alt={stack.name} />                            
                                    <span>{stack.name}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                    <section className="improvement">
                        <h3>
                            Possible areas of improvement
                        </h3>
                        <ul>
                            {data.Projects[id].improvements.map((improvement, id) => (
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
                        <span> Back</span>
                    </button>
                    {data.Projects[id].pictures.map((picture, index) => (
                        <div className="img-wraper" key={index}>
                            <img src={process.env.PUBLIC_URL + picture.url} alt={picture.alt}/>
                        </div>
                    ))}

                    <footer>
                        <a href={data.Projects[id].github} target="_blank" rel="noopener noreferrer" className="github-link">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        {data.Projects[id].demo? <a href={data.Projects[id].demo} target="_blank" rel="noopener noreferrer" className="demo-link">
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

export default ProjectSinglePage;