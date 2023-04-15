import { useEffect, useState, useContext } from 'react';
import AnimatedLetters from '../../../components/AnimatedLetters';
import Loader from "react-loaders";
import { getCertifications, getChallenges } from '../../../services/service';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../Layout';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faCircleCheck, faFlask, faGraduationCap, faHourglassHalf, faMedal } from '@fortawesome/free-solid-svg-icons';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const BlogPreview = () => {
    const { language } = useContext(LanguageContext);
    const [certifications, setCertifications] = useState([])
    const [challenges, setChallenges] = useState([])
    const [letterClass, setLetterClass] = useState('text-animate');
    const [page, setPage] = useState({});
    const [expanded, setExpanded] = useState(false);
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        const En = {
            title: ['C','u','r','r','e','n','t','l','y','','W','o','r','k','i','n','g',' ','O','n','.','.','.'],
            subtitle: "A collection of the certifications, challenges and new features for training purposes I am currently working on.",
            filterTitle: 'Filter by status',
            filterCompleted: 'Completed',
            filterInProgress: 'In Progress',
            filterPlanned: 'Planned',
            filterAll: 'All',
            certificationTitle: 'Certifications',
            challengeTitle: 'Challenges',
            trainingTitle: 'Trainings',
            noData: 'No data available',
            btnSeeMore: 'See more',
            jobVisualiser : {
                title: 'Job Visualiser',
                description: 'A 3 parts application that allows you to keep track of your job applications. It is composed of a front-end, a back-end and a web-scraper.',
                tags: "#React #Bootstrap #Azure #MongoDB #NodeJS #ExpressJS #RESTfulAPI",
                link: "/blog/trainings/job-visualiser" 
            },
            btnMore: 'See more'
        }

        const Fr = {
            title: ['P','r','o','j','e','t','s',' ','E','n',' ','C','o','u','r','s','.','.','.'],
            subtitle: "Une collection des certifications, challenges et nouvelles fonctionnalités sur lesquelles je travaille actuellement.",
            filterTitle: 'Filtrer par statut',
            filterCompleted: 'Terminé',
            filterInProgress: 'En Cours',
            filterPlanned: 'A Venir',
            filterAll: 'Tous',
            certificationTitle: 'Certifications',
            challengeTitle: 'Challenges',
            trainingTitle: 'Projets perso',
            noData: 'Aucune donnée disponible',
            btnSeeMore: 'Voir plus',
            jobVisualiser : {
                title: 'Job Visualiser',
                description: 'Une application composée de 3 parties qui vous permet de garder une trace de vos candidatures. Elle est composée d\'un front-end, d\'un back-end et d\'un web-scraper.',
                tags: "#React #Bootstrap #Azure #MongoDB #NodeJS #ExpressJS #RESTfulAPI",
                link: "/blog/trainings/job-visualiser" 
            },
            btnMore: 'Voir plus'
        }

        async function fetchData() {
            try {
                const certifications = await getCertifications();
                setCertifications(certifications)

                const challenges = await getChallenges();
                setChallenges(challenges)

                language === 'fr' ? setPage(Fr) : setPage(En);
            } catch (error) {
                console.log(error)
            }
        }

        fetchData();


        setTimeout(() => {
            setLetterClass('text-animate-hover')
          }, 4000)
      }, [language])

      function setLanguage(props) {
            if(language === 'fr') {
                return props.fr
            } else {
                return props.en
            }
        }

        const handleAccordionChange = (panel) => (event, newExpanded) => {
            setExpanded(newExpanded ? panel : false);
    
            // if at least one panel is expanded, isHidden is set to true
            if(newExpanded) {
                setIsHidden(true);
            } else {
                setIsHidden(false);
            }
        };

        function iconStatus(status) {
            if(status === 'Completed') {
                return <FontAwesomeIcon icon={faCircleCheck} className="completed" />
            }
            if(status === 'Active') {
                return <FontAwesomeIcon icon={faHourglassHalf} className="active" />
            }
            if(status === 'Planned') {
                return <FontAwesomeIcon icon={faCalendarCheck} className="planned" />
            }
        }

    if(page.title){
        return (
            <div className="container projects-page">
                <section className="project-section blog-section">
                    
                    {!isHidden?
                        <>
                            <h1>
                                <AnimatedLetters
                                    letterClass={letterClass}
                                    strArray={page.title}
                                    idx={10}
                                />
                            </h1> 
                            <p>
                                {page.subtitle}
                            </p>
                        </>
                    : null}

                    <div className='accordion__main-container'>
                        <Accordion
                            expanded={expanded === 'panel-certification'}
                            onChange={handleAccordionChange('panel-certification')}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon className='accordion__expand' />}
                                aria-controls="panel-certification"
                                id="panel-certification"
                                className='accordion__summary accordion__certification'
                            >
                                <FontAwesomeIcon icon={faGraduationCap} />
                                <span>
                                    {page.certificationTitle}
                                </span>
                            </AccordionSummary>
                            <AccordionDetails className='accordion__details'>
                                <section className='card card--accordion'>
                                            {certifications.length !== 0 ? 
                                    <div className='card-body accordion__card'>
                                        {Object.keys(certifications).map((certification, index) => (
                                            <a 
                                                key={index} 
                                                href={certifications[certification].url} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="card-certification" 
                                                aria-label={`Go to ${setLanguage(certifications[certification].name)} certification page`}
                                            >
                                                <header>
                                                    <img src={process.env.PUBLIC_URL + certifications[certification].img} alt={`${setLanguage(certifications[certification].name)} by ${certifications[certification].author}`} />
                                                    <span className='card-certification__author'>{certifications[certification].author}</span>
                                                </header>
                                                <div className='card-certification__content'>
                                                    <span className="card-certification__name">{setLanguage(certifications[certification].name)}</span>
                                                    <span className="card-certification__type">[{setLanguage(certifications[certification].type)}] </span>
                                                </div>
                                                {iconStatus(certifications[certification].status)}                                    
                                            </a>
                                        ))}
                                    </div>
                                : <div className="card-body"><h3 className='no-data'>{page.noData}</h3></div>
                                }
                                </section>

                            </AccordionDetails>
                        </Accordion>

                        <Accordion
                            expanded={expanded === 'panel-challenge'}
                            onChange={handleAccordionChange('panel-challenge')}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon className='accordion__expand' />}
                                aria-controls="panel-challenge"
                                id="panel-challenge"
                                className='accordion__summary accordion__challenge'
                            >
                                <FontAwesomeIcon icon={faMedal} />  
                                <span>
                                    {page.challengeTitle}
                                </span>
                            </AccordionSummary>
                            <AccordionDetails className='accordion__details'>
                                <section className='card card--accordion'>
                                            {challenges.length !== 0 ? 
                                    <div className='card-body accordion__card'>
                                        {Object.keys(challenges).map((challenge, index) => (
                                            <div key={index} className="card-challenge">
                                                <a 
                                                    href={`${challenges[challenge].url}`} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    className="card-challenge__ext-link" 
                                                    aria-label={`Go to ${setLanguage(certifications[challenge].name)} challenge page`}
                                                />
                                                <span className="card-challenge__title">{setLanguage(challenges[challenge].name)}</span>
                                                    {setLanguage(challenges[challenge].description).map((description, index) => (
                                                        <span key={index} className="card-challenge__description">{description}</span>
                                                    ))}
                                                    {challenges[challenge].contribution?
                                                        (
                                                            <Link
                                                                to={challenges[challenge].contribution}
                                                                className='flat-button card-challenge__int-link'
                                                            >
                                                                {page.btnSeeMore}
                                                            </Link>
                                                        )
                                                    : null
                                                    }
                                                    {iconStatus(challenges[challenge].status)}    
                                            </div>                             
                                        ))}
                                    </div>
                                : <div className="card-body"><h3 className='no-data'>{page.noData}</h3></div>
                                }
                                </section>

                            </AccordionDetails>
                        </Accordion>

                        <Accordion
                            expanded={expanded === 'panel-training'}
                            onChange={handleAccordionChange('panel-training')}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon className='accordion__expand' />}
                                aria-controls="panel-training"
                                id="panel-training"
                                className='accordion__summary accordion__training'
                            >
                                <FontAwesomeIcon icon={faFlask} />
                                <span>
                                    {page.trainingTitle}
                                </span>
                            </AccordionSummary>
                            <AccordionDetails className='accordion__details'>
                                <section className='card card--accordion'>
                                    <div className="card-body accordion__card">
                                        <div className="card-challenge">
                                            <span className="card-challenge__title">
                                                {page.jobVisualiser.title}
                                            </span>
                                            <span className="card-challenge__description">
                                                {page.jobVisualiser.description}
                                            </span>
                                            <span className="card-challenge__description">
                                                {page.jobVisualiser.tags}
                                            </span>
                                            <Link 
                                                to={page.jobVisualiser.link} 
                                                className='flat-button card-challenge__int-link'
                                            >
                                                {page.btnSeeMore}
                                            </Link>
                                        </div>
                                    </div>
                                </section>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    
                    <Link 
                        to="/blog"
                        className='flat-button'
                    >
                        {page.btnMore}
                    </Link>
                </section>
            </div>
        )
    } else {
        return <Loader type="pacman"/>
    }
}
export default BlogPreview