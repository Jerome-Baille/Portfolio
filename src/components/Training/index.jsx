import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'

const Training = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 3000)

  }, [])

return (
    <>
    <div className="container">
        <section className="project-section">
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['J','o','b',' ','V', 'i', 's','u','a','l','i','s','e','r']}
                    idx={15}
                    />
                </h1>
                <div className="project-section__body">
                    <p>
                        Job Visualiser is a 3 parts web application that helps users to visualise their job search process. It helps users to track their job search process and helps them to visualise their progress. 
                    </p>
                    <figure>
                        <img 
                            src="/Portfolio/Projects/JobVisualiser/job-visualiser-schema.png" 
                            alt="Schema of the Job Visualiser App" 
                        />
                        <figcaption>
                            Schema of the Job Visualiser App
                        </figcaption>
                    </figure>
                    <div>
                        <h2>
                            The Google Chrome Extension
                        </h2>
                        <div className='div-container'>
                            <video 
                                 
                                alt="logo Google Chrome." 
                                autoPlay
                                loop 
                                muted
                            >
                                <source src="/Portfolio/Projects/JobVisualiser/job-application-tracker.webm" type="video/webm"/>
                            </video>
                        </div>
                        <p>
                        The extension helps users to track their job search process by adding jobs to their dashboard. 
                        </p>
                        <p>
                        It collects the title of the position, the company name, the location, the type of job (remote, hybrid or on site) and the date of application.
                        </p>
                        <p>
                        If the extension is not compatible with the website, the user can manually add the job from the dashboard.
                        </p>
                    </div>

                    
                    <div>
                        <h2>
                            The Application Programming Interface (API)
                        </h2>
                        <p>
                        It allows both the extension and the dashboard to communicate with the database and to store the data.
                        </p>
                        <p>
                        The API is written in Node.JS with Express and uses MongoDB as a database.
                        </p>
                        <p>
                        The API is deployed on Microsoft Azure.
                        </p>
                    </div>

                    <div>
                        <h2>
                            The Dashboard
                        </h2>
                        <div>
                            <img src="/Portfolio/Projects/JobVisualiser/mockup-1.png" alt="logo react." />
                        </div>
                        <p>
                        A dashboard that displays the jobs added by the user. The dashboard displays the jobs in a timeline and allows the user to filter the jobs by type of job (remote, hybrid or on site) and by status (approved, rejected, pending or unknown).
                        </p>
                        <p>
                        The dashboard also displays statistics regarding the user's job search process. The statistics are displayed in a pie chart. The pie chart displays the number of jobs by status. A table also displays the number of jobs by status per months and per weeks.
                        </p>
                        <p>
                        The dashboard allows the user to modify (eg. to add an interview date, or modify the status of the job application) or delete any job application.
                        </p>
                        <div>
                            <img src="/Portfolio/Projects/JobVisualiser/mockup-2.png" alt="logo react." />
                        </div>
                        <p>
                        The dashboard also displays the list of job boards used by the user. So that the user can easily access the job boards and apply for jobs.
                        </p>
                        <div>
                            <img src="/Portfolio/Projects/JobVisualiser/mockup-3.png" alt="logo react." />
                        </div>
                        <p>
                            The dashboard is written in React with the Bootstrap library. It uses React-Google-Chart to display the pie chart.
                        </p>
                    </div>
                </div>
        </section>
    </div>
    <Loader type="pacman"/>
    </>
)
}

export default Training