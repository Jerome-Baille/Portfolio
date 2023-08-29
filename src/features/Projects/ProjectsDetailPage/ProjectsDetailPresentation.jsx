import React from 'react';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInternetExplorer } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import StackIconsDisplay from '../../../components/stackIconsDisplay/StackIconsDisplay';

import './projectsDetailPage.scss';
import { scroller } from 'react-scroll';

const ProjectsDetailPresentation = ({
    projectDataGeneric,
    projectsDataLocale,
    technologyList
}) => {
    const navigate = useNavigate();

    const handleTagsLink = (tag) => {
        console.log(tag);
        const matchingItem = Object.values(technologyList).find(item => item.id.toUpperCase() === tag.trim().toUpperCase());
        if (matchingItem) {
            return (
                <StackIconsDisplay key={matchingItem.id} item={matchingItem} />
            )
        }
    }

    const handleNavigation = () => {
        navigate('/');
        setTimeout(() => {
            scroller.scrollTo('projects', {
                smooth: true,
                offset: 0,
                duration: 1000,
            });
        }, 500);
    }


    return (
        <div className="container">
            <section className="projectsDetailPage__section inside-container">
                <button onClick={handleNavigation} className='flat-button mr0 back-left'>
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <span> {projectsDataLocale.backBtn}</span>
                </button>
                <div className="projectsDetailPage__text">
                    <header>
                        <h1>
                            {projectsDataLocale.title}
                        </h1>
                        <h2>
                            {projectsDataLocale.subtitle}
                        </h2>
                    </header>

                    <section id="descriptions" className='projectsDetailPage__description-container'>
                        {Object.keys(projectsDataLocale.descriptions).map((description, index) => (
                            <div key={index} className='projectsDetailPage__description'>
                                {projectsDataLocale.descriptions[description].title &&
                                    <h3>{projectsDataLocale.descriptions[description].title}</h3>}
                                {projectsDataLocale.descriptions[description].content &&
                                    projectsDataLocale.descriptions[description].content.split('\n').map((sentence, idx) => (
                                        <p key={idx}>
                                            {sentence}<br />
                                        </p>
                                    ))}
                            </div>
                        ))}
                    </section>

                    <section id="skills">
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

                    <section id="stack" className='projectsDetailPage__description-container'>
                        <h3>
                            {projectsDataLocale.stackTitle}
                        </h3>
                        <div className="projectsDetailPage__stack">
                            {(projectDataGeneric.tags.split(', ')).map((stack, index) => (
                                handleTagsLink(stack, index)
                            ))}
                        </div>
                    </section>
                    <section id="improvement">
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

                <div className="projectsDetailPage__image">
                    <button onClick={handleNavigation} className='flat-button mr0 back-right'>
                        <FontAwesomeIcon icon={faArrowLeft} />
                        <span> {projectsDataLocale.backBtn}</span>
                    </button>
                    {projectDataGeneric.pictures ?
                        (Object.keys(projectDataGeneric.pictures).map((picture, index) => (
                            <figure key={index}>
                                <img
                                    src={process.env.PUBLIC_URL + projectDataGeneric.pictures[picture].url}
                                    alt={projectsDataLocale.pictures[picture].alt}
                                    className='framed-picture'
                                />
                                <figcaption>
                                    Figure {index + 1} : {projectsDataLocale.pictures[picture].alt}
                                </figcaption>
                            </figure>
                        )))
                        : null
                    }

                    <footer>
                        <a
                            href={projectDataGeneric.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="github-link"
                        >
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        {projectDataGeneric.demo ?
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