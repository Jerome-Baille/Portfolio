import { NavLink } from 'react-router-dom';

import { Link } from 'react-scroll';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faHome, faBriefcase, faFilePdf, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function DesktopNavbar({
    dataNavbar,
    handleClick
}) {
    const fetchIcon = (link) => {
        switch(link) {
            case 'home':
                return faHome;
            case 'about':
                return faUser;
            case 'projects':
                return faBriefcase;
            case 'certifications':
                return faGraduationCap;
            case 'contact':
                return faEnvelope;
            case 'cv':
                return faFilePdf;
            case 'linkedIn':
                return faLinkedin;
            case 'github':
                return faGithub;
            default:
                return faHome;
        }
    }

    const handleScroll = (key) => {
        return () => {
            handleClick(key);
        }
    }

    return (
        <nav className='navbar'>
            <NavLink className='logo' to='/'>
                <img src={process.env.PUBLIC_URL + dataNavbar.logo} alt={dataNavbar.alt} />
            </NavLink>
            <section className='navbar__group'>
                {dataNavbar &&
                    Object.keys(dataNavbar.intern).map((key) => {
                        const link = dataNavbar.intern[key];
                        return (
                            <Link 
                                key={key} 
                                exact="true" 
                                activeClass="active"
                                aria-label={link.aria}
                                to={key}
                                spy={true}
                                onClick={handleScroll(key)}
                            >
                                <FontAwesomeIcon icon={fetchIcon(key)}/>
                            </Link>
                        );
                })}
            </section>
            <footer className='navbar__group'>
                {dataNavbar &&
                    Object.keys(dataNavbar.extern).map((key) => {
                        const link = dataNavbar.extern[key];
                        return (
                            <a
                                key={key}
                                href={link.link}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={link.aria}
                            >
                                <FontAwesomeIcon icon={fetchIcon(key)}/>
                            </a>
                        );
                    })
                }
            </footer>
        </nav>
    )
}

export default DesktopNavbar;
