import { useEffect, useState, useContext } from 'react';
import AnimatedLetters from '../../AnimatedLetters';
import Loader from "react-loaders";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faCircleCheck, faHourglassHalf } from '@fortawesome/free-solid-svg-icons';
import { getCertifications } from '../../../services/service';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../Layout';

import AccordionComponent from './AccordionComponent';


const BlogPreview = () => {
    const { language } = useContext(LanguageContext);
    const [certifications, setCertifications] = useState([])
    const [letterClass, setLetterClass] = useState('text-animate');
    const [page, setPage] = useState({});

    function setLanguage(props) {
        if(language === 'fr') {
            return props.fr
        } else {
            return props.en
        }
    }

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
                <section className="project-section blog-section">
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

                    <AccordionComponent/>
                    
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