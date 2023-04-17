import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faHome, faBriefcase, faFilePdf, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import CVen from '../../../assets/pdf/EN/Jerome BAILLE - Frontend Developer.pdf';
import CVfr from '../../../assets/pdf/FR/Jérôme BAILLE - Développeur Frontend.pdf';
import { useContext } from 'react';
import { LanguageContext } from '../../Layout';

function DesktopNavbar() {
    const JBLogo = '/images/JB-logo2.png'
    const { language } = useContext(LanguageContext);

    return (
        <div className="navbar">
            <Link className='logo' to='/'>
                <img src={process.env.PUBLIC_URL + JBLogo} alt="Jerome Baille logo" />
            </Link>
            <nav>
                <NavLink 
                    exact="true" 
                    activeclassname="active" 
                    to='/' 
                    aria-label="Go to homepage"
                >
                    <FontAwesomeIcon icon={faHome}/>
                </NavLink>
                <NavLink 
                    exact="true" 
                    activeclassname="active" 
                    to='/about' 
                    aria-label="Go to about page" 
                >
                    <FontAwesomeIcon icon={faUser}/>
                </NavLink>
                <NavLink 
                    exact="true" 
                    activeclassname="active" 
                    to='/projects' 
                    aria-label="Go to projects page"
                >
                    <FontAwesomeIcon icon={faBriefcase}/>
                </NavLink>
                <NavLink 
                    exact="true" 
                    activeclassname="active" 
                    to='/blog' 
                    aria-label="Go to blog page"
                >
                    <FontAwesomeIcon icon={faGraduationCap}/>
                </NavLink>
                <NavLink 
                    exact="true" 
                    activeclassname="active"
                    to='/contact'
                    aria-label="Go to contact page"
                >
                    <FontAwesomeIcon icon={faEnvelope}/>
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a 
                        href={language==='fr' ? CVfr : CVen} 
                        className="resume-link" 
                        target="_blank" 
                        rel="noreferrer" 
                        aria-label={language==='fr' ? 'CV de Jerome BAILLE' : 'Get Jerome Baille resume'} 
                        download
                    >
                        <FontAwesomeIcon icon={faFilePdf} />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href='http://www.linkedin.com/in/jerome-baille/' aria-label="Go to Jerome Baille linkedIn">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://github.com/Jerome-Baille' aria-label="Go to Jerome Baille github">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default DesktopNavbar;