import { useEffect, useState, useContext } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { LanguageContext } from '../Layout'

const Training = () => {
    const { language } = useContext(LanguageContext)
    const [page, setPage] = useState({})
    const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const En = {
        title: ['J','o','b',' ','V', 'i', 's','u','a','l','i','s','e','r'],
        description: 'Job Visualiser is a 3 parts web application that helps users to visualise their job search process. It helps users to track their job search process and helps them to visualise their progress.',
        alt: "Schema of the Job Visualiser App" ,
        extension: {
            title: 'The Google Chrome Extension',
            description: 
            `The extension helps users to track their job search process by adding jobs to their dashboard. 
            \nIt collects the title of the position, the company name, the location, the type of job (remote, hybrid or on site) and the date of application. 
            \nIf the extension is not compatible with the website, the user can manually add the job from the dashboard.`,
        },
        api: {
            title: 'The Application Programming Interface (API)',
            description: 
            `It allows both the extension and the dashboard to communicate with the database and to store the data. 
            \nThe API is written in Node.JS with Express and uses MongoDB as a database. 
            \nThe API is deployed on PlanetHoster.`,
        },
        dashboard: {
            title: 'The Dashboard',
            alt1: 'Mockup of the dashboard on three different devices.',
            description: 
            `A dashboard that displays the jobs added by the user. The dashboard displays the jobs in a timeline and allows the user to filter the jobs by type of job (remote, hybrid or on site) and by status (approved, rejected, pending or unknown). 
            \nThe dashboard also displays statistics regarding the user's job search process. The statistics are displayed in a pie chart. The pie chart displays the number of jobs by status. A table also displays the number of jobs by status per months and per weeks. 
            \nThe dashboard allows the user to modify (eg. to add an interview date, or modify the status of the job application) or delete any job application.`,
            alt2: 'Manual add of a job opportunity on mobile.',
            description2: 'The dashboard also displays the list of job boards used by the user. So that the user can easily access the job boards and apply for jobs.',
            alt3: 'Main dashboard on mobile.',
            description3: 'The dashboard is written in React with the Bootstrap library. It uses React-Google-Chart to display the pie chart.'
        },

    }

    const Fr = {
        title: ['J','o','b',' ','V', 'i', 's','u','a','l','i','s','e','r'],
        description: `Job Visualiser est une application web composée de 3 parties qui aide les utilisateurs à visualiser leur processus de recherche d'emploi. Il aide les utilisateurs à suivre leur processus de recherche d'emploi et à les aider à visualiser leur progression.`,
        alt: "Schéma de l'application Job Visualiser" ,
        extension: {
            title: `L'extension Google Chrome`,
            description: 
            `L'extension aide les utilisateurs à suivre leur processus de recherche d'emploi en ajoutant des emplois à leur tableau de bord. 
            \nIl recueille le titre du poste, le nom de la société, l'emplacement, le type d'emploi (à distance, hybride ou sur site) et la date de candidature. 
            \nSi l'extension n'est pas compatible avec le site Web, l'utilisateur peut ajouter manuellement le poste depuis le tableau de bord.`,
        },
        api: {
            title: `L'interface de programmation d'applications (API)`,
            description: 
            `Il permet à l'extension et au tableau de bord de communiquer avec la base de données et de stocker les données. 
            \nL'API est écrite en Node.JS avec Express et utilise MongoDB comme base de données. 
            \nL'API est déployée sur PlanetHoster.`,
        },
        dashboard: {
            title: 'Le tableau de bord',
            alt1: 'Maquette du tableau de bord sur trois appareils différents.',
            description: 
            `Un tableau de bord qui affiche les emplois ajoutés par l'utilisateur. Le tableau de bord affiche les emplois par ordre chronologique et permet à l'utilisateur de filtrer les emplois par type (à distance, hybride ou sur site) et/ou par statut (approuvé, rejeté, en attente ou inconnu). 
            \nLe tableau de bord affiche également des statistiques concernant le processus de recherche d'emploi de l'utilisateur. Le graphique circulaire affiche le nombre d'emplois par statut. Un tableau affiche également des statistiques détaillées (par mois et par semaine). 
            \nLe tableau de bord permet à l'utilisateur de modifier (par exemple, pour ajouter une date d'entretien ou modifier le statut de la candidature) ou de supprimer une candidature.`,
            alt2: `Ajout manuel d'une candidature sur mobile.`,
            description2: `Le tableau de bord affiche également la liste des sites Web d'offres d'emploi utilisés par l'utilisateur. Ainsi, l'utilisateur peut facilement accéder aux sites Web d'offres d'emploi et postuler.`,
            alt3: 'Tableau de bord principal sur mobile.',
            description3: 'Le tableau de bord est écrit en React avec la bibliothèque Bootstrap. Il utilise React-Google-Chart pour afficher le graphique circulaire.'
        }
    }

    language === 'fr' ? setPage(Fr) : setPage(En)

    setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 3000)

  }, [language])

    if(!page.title) {
        return <Loader type="pacman" />
    } else {
        return (
        <div className="container">
            <section className="project-section">
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass}
                        strArray={page.title}
                        idx={15}
                        />
                    </h1>
                    <div className="project-section__body">
                        <p>
                            {page.description}
                        </p>
                        <img 
                            src="/Projects/JobVisualiser/job-visualiser-schema.png"
                            alt={page.alt}
                        />
                        <div>
                            <h2>
                                {page.extension.title}
                            </h2>
                            <div className='div-container'>
                                <video 
                                    
                                    alt="Google Chrome Extension." 
                                    autoPlay
                                    loop 
                                    muted
                                >
                                    <source src="/Projects/JobVisualiser/job-application-tracker.webm" type="video/webm"/>
                                </video>
                            </div>
                            <p>
                                {page.extension.description}
                            </p>
                        </div>

                        
                        <div>
                            <h2>
                                {page.api.title}
                            </h2>
                            <p>
                                {page.api.description}
                            </p>
                        </div>

                        <div>
                            <h2>
                                {page.dashboard.title}
                            </h2>
                            <div>
                                <img src="/Projects/JobVisualiser/mockup-1.png" alt={page.dashboard.alt1} />
                            </div>
                            <p>
                                {page.dashboard.description}
                            </p>
                            <div>
                                <img src="/Projects/JobVisualiser/mockup-2.png" alt={page.dashboard.alt2} />
                            </div>
                            <p>
                                {page.dashboard.description2}
                            </p>
                            <div>
                                <img src="/Projects/JobVisualiser/mockup-3.png" alt={page.dashboard.alt3} />
                            </div>
                            <p>
                                {page.dashboard.description3}
                            </p>
                        </div>
                    </div>
            </section>
        </div>
        )
    }
}

export default Training