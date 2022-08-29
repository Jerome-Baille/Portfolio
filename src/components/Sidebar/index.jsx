import { Link, NavLink } from 'react-router-dom';
import JBLogo from '../../assets/images/JB-logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faHome, faBriefcase, faFilePdf, faHourglassHalf } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className="nav-bar">
        <Link className='logo' to='/'>
            <img src={JBLogo} alt="Jerome Baille logo" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to='/' aria-label="Go to homepage">
                <FontAwesomeIcon icon={faHome}/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to='/about' aria-label="Go to about page">
                <FontAwesomeIcon icon={faUser}/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="projects-link" to='/projects' aria-label="Go to projects page">
                <FontAwesomeIcon icon={faBriefcase}/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="blog-link" to='/blog' aria-label="Go to blog page">
                <FontAwesomeIcon icon={faHourglassHalf}/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to='/contact' aria-label="Go to contact page">
                <FontAwesomeIcon icon={faEnvelope}/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a href="https://drive.google.com/file/d/1u-uiwfY8TCLXBVAII6zQBvGpqYGXFdvs/view?usp=sharing" className="resume-link" target="_blank" rel="noreferrer" aria-label="Get Jerome Baille resume" download>
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

export default Sidebar;