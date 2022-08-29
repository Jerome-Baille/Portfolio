import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from "react-loaders";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faCircleCheck, faFlask, faGraduationCap, faHourglassHalf, faMedal } from '@fortawesome/free-solid-svg-icons';
import { getCertifications, getChallenges } from '../../services/service';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';


const Blog = () => {
    const [certifications, setCertifications] = useState([])
    const [challenges, setChallenges] = useState([])
    const [trainings, setTrainings] = useState([])
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
          }, 4000)

        getCertifications().then(data => {
            setCertifications(data)
        }).catch(err => {
            console.log(err)
        })

        getChallenges().then(data => {
            setChallenges(data)
        }).catch(err => {
            console.log(err)
        })
      }, [])

    function handleClick(e) {
        var search = e.target.value;

        const activeBtn = document.querySelectorAll('.filter-active');
        activeBtn.forEach(btn => {
            btn.classList.remove('filter-active');
        })
        e.target.classList.add('filter-active');

        getCertifications()
            .then(data => {
                const filtered = data.filter(o =>
                    Object.keys(o).some(k => o[k].includes(search)));

                (search === 'All') ? setCertifications(data) : setCertifications(filtered);
            })
            .catch(err => {
                console.log(err)
            })  

        getChallenges()
            .then(data => {
                const filtered = data.filter(o =>
                    Object.keys(o).some(k => o[k].includes(search)));

                (search === 'All') ? setChallenges(data) : setChallenges(filtered);
            })
            .catch(err => {
                console.log(err)
            })  
    }

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

    function getContributions(input){
        if(input === '100 days CSS Challenge') {
            return <Link 
                        to="/blog/challenges/HundredDaysChallenge" 
                        className='flat-button card-challenge__int-link'
                    >My contributions</Link>
        }
    }

    if(certifications){
        return (
            <>
            <div className="container projects-page">
                <section className="project-section blog-section">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C','u','r','r','e','n','t','l','y','','W','o','r','k','i','n','g',' ','O','n','.','.','.']}
                            idx={15}
                        />
                    </h1> 
                    <p>
                        A collection of the certifications, challenges and new features for training purposes I am currently working on.
                    </p>

                    <div className="filter-btn">
                        <button 
                            value='Completed' 
                            className='flat-button'   
                            onClick={handleClick}
                        >Completed</button>
                        <button 
                            value='Active'  
                            className='flat-button'     
                            onClick={handleClick}
                        >In-progress</button>
                        <button 
                            value='Planned' 
                            className='flat-button'     
                            onClick={handleClick}
                        >Planned</button>
                        <button 
                            value='All'   
                            className='flat-button filter-active'       
                            onClick={handleClick}
                        >All</button>
                    </div>

                <section className="blog-container">
                    <div className="card card-certifications">
                        <div className="card-header">
                            <FontAwesomeIcon icon={faGraduationCap} />
                            <span>Certifications</span>
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
                                        aria-label={`Go to ${certifications[certification].name} certification page`}
                                    >
                                        <header>
                                            <img src={process.env.PUBLIC_URL + certifications[certification].img} alt={`${certifications[certification].name} by ${certifications[certification].author}`} />
                                            <span className='card-certification__author'>{certifications[certification].author}</span>
                                        </header>
                                        <div className='card-certification__content'>
                                            <span className="card-certification__name">{certifications[certification].name}</span>
                                            <span className="card-certification__type">[{certifications[certification].type}] </span>
                                        </div>
                                        {iconStatus(certifications[certification].status)}                                    
                                    </a>
                                ))}
                            </div>
                        : <div className="card-body"><h3 className='no-data'>No data found</h3></div>}
                    </div>

                    <div className="card card-challenges">
                        <div className="card-header">
                            <FontAwesomeIcon icon={faMedal} />
                            <span>Challenges</span>
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
                                        aria-label={`Go to ${challenges[challenge].name} certification page`}
                                    />
                                        <span className="card-challenge__title">{challenges[challenge].name}</span>
                                        {challenges[challenge].description.map((description, index) => (
                                            <span key={index} className="card-challenge__description">{description}</span>
                                        ))}
                                        {getContributions(challenges[challenge].name)}
                                        {iconStatus(challenges[challenge].status)}
                                    
                                    </div>
                                ))}
                            </div>
                        : <div className="card-body"><h3 className='no-data'>No data found</h3></div>}
                    </div>

                    <div className="card card-training">
                        <div className="card-header">
                            <FontAwesomeIcon icon={faFlask} />
                            <span>Training</span>
                        </div>
                        {trainings.length !== 0 ?
                        <div className="card-body">
                            <ul>
                                <li>Project 1</li>
                                <li>Project 2</li>
                                <li>Project 3</li>
                            </ul>
                        </div>
                        : <div className="card-body"><h3 className='no-data'>No data found</h3></div>}
                    </div>
                </section>
                    
                </section>
            </div>
            <Loader type="pacman"/>
            </>
        )
    }
}
export default Blog