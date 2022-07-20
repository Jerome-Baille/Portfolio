import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import AnimatedLetters from '../../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInternetExplorer } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Loader from "react-loaders";

const ProjectSinglePage = () => {
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


    const { id } = useParams()
    const navigate = useNavigate();

    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    if(projects.length !== 0) {
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
                                strArray={Object.values(projects[id].name)}
                                idx={15}
                            />
                        </h1> 
                        <div className="subtitle">
                            <h2>{projects[id].subtitle}</h2>
                        </div>
                        {projects[id].descriptions.map((description, index) => (
                            <p key={index}>
                                {description}
                            </p>
                        ))}

                        <section className="skills">
                            <h3>
                                Needed Skills
                            </h3>

                            <ul>
                                {projects[id].skills.map((skill, index) => (
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
                                {projects[id].stack.map((stack, index) => (
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
                                {projects[id].improvements.map((improvement, id) => (
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
                        {projects[id].pictures.map((picture, index) => (
                            <div className="img-wraper" key={index}>
                                <img src={process.env.PUBLIC_URL + picture.url} alt={picture.alt}/>
                            </div>
                        ))}

                        <footer>
                            <a href={projects[id].github} target="_blank" rel="noopener noreferrer" className="github-link">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            {projects[id].demo? <a href={projects[id].demo} target="_blank" rel="noopener noreferrer" className="demo-link">
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