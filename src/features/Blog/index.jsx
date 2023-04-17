import { useEffect, useState, useContext } from 'react';
import AnimatedLetters from '../../components/AnimatedLetters';
import Loader from "react-loaders";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faCircleCheck, faFlask, faGraduationCap, faHourglassHalf, faMedal } from '@fortawesome/free-solid-svg-icons';
import { getCertifications, getChallenges } from '../../services/service';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../Layout';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const Blog = () => {
    const { language } = useContext(LanguageContext);
    const [certifications, setCertifications] = useState([])
    const [challenges, setChallenges] = useState([])
    // const [trainings, setTrainings] = useState([])
    const [letterClass, setLetterClass] = useState('text-animate');
    const [page, setPage] = useState({});
    const [filter, setFilter] = useState('');

    function setLanguage(props) {
        if(language === 'fr') {
            return props.fr
        } else {
            return props.en
        }
    }
    const handleChange = (event) => {
        async function fetchData(filter) {
            try {
                const certifications = await getCertifications(filter);
                setCertifications(certifications)

                const challenges = await getChallenges(filter);
                setChallenges(challenges)

                // const trainings = await getTrainings();
                // setTrainings(trainings)   
            } catch (error) {
                console.log(error)
            }
        }

        setFilter(event.target.value);
        fetchData(event.target.value);
      };

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
            }
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
            }
        }

        async function fetchData() {
            try {
                const certifications = await getCertifications();
                setCertifications(certifications)

                const challenges = await getChallenges();
                setChallenges(challenges)

                // const trainings = await getTrainings();
                // setTrainings(trainings)   
                
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

    if(certifications && page.title){
        return (
            <div className="container projects-page">
                <section className="project-section blog-section inside-container">
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

                    {/* <div className="filter-btn"> */}

                        <FormControl 
                            sx={{ 
                                minWidth: 250,
                                marginBottom: 2,
                            }}
                        >
                            <InputLabel id="demo-simple-select-label">
                                {page.filterTitle}
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={filter}
                                label="Filter"
                                onChange={handleChange}
                            >
                                <MenuItem value={'Completed'}>{page.filterCompleted}</MenuItem>
                                <MenuItem value={'Active'}>{page.filterInProgress}</MenuItem>
                                <MenuItem value={'Planned'}>{page.filterPlanned}</MenuItem>
                                <MenuItem value={'All'}>{page.filterAll}</MenuItem>
                            </Select>
                        </FormControl>

                        {/* <button 
                            value='Completed' 
                            className='flat-button'   
                            onClick={handleClick}
                        >
                            {page.btnCompleted}
                        </button>
                        <button 
                            value='Active'  
                            className='flat-button'     
                            onClick={handleClick}
                        >
                            {page.btnInProgress}
                        </button>
                        <button 
                            value='Planned' 
                            className='flat-button'     
                            onClick={handleClick}
                        >
                            {page.btnPlanned}
                        </button>
                        <button 
                            value='All'   
                            className='flat-button filter-active'       
                            onClick={handleClick}
                        >
                            {page.btnAll}
                        </button> */}
                    {/* </div> */}

                    <section className="blog-container">
                        <div className="card card-certifications">
                            <div className="card-header">
                                <FontAwesomeIcon icon={faGraduationCap} />
                                <span>
                                    {page.certificationTitle}
                                </span>
                            </div>
                            {certifications.length !== 0 ? 
                                <div className="card-body">
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
                        </div>

                        <div className="card card-challenges">
                            <div className="card-header">
                                <FontAwesomeIcon icon={faMedal} />
                                <span>
                                    {page.challengeTitle}
                                </span>
                            </div>
                            {challenges.length !== 0 ?
                                <div className="card-body">
                                    {Object.keys(challenges).map((challenge, index) => (
                                        <div key={index} className="card-challenge">
                                        <a 
                                            href={`${challenges[challenge].url}`} 
                                            // to={`challenges/${challenges[challenge].url}`}
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className='card-challenge__ext-link'
                                            aria-label={`Go to ${setLanguage(challenges[challenge].name)} challenge page`}
                                        />
                                            <span className="card-challenge__title">{setLanguage(challenges[challenge].name)}</span>
                                            {setLanguage(challenges[challenge].description).map((description, index) => (
                                                <span key={index} className="card-challenge__description">{description}</span>
                                            ))}
                                            {/* {getContributions(challenges[challenge].name.en)} */}
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
                            : <div className="card-body"><h3 className='no-data'>{page.noData}</h3></div>}
                        </div>

                        <div className="card card-training card-training--big">
                            <div className="card-header">
                                <FontAwesomeIcon icon={faFlask} />
                                <span>
                                    {page.trainingTitle}
                                </span>
                            </div>
                            <div className="card-body">
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
                        </div>
                    </section>
                    
                </section>
            </div>
        )
    } else {
        return <Loader type="pacman"/>
    }
}
export default Blog