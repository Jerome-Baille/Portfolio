import { scroller } from 'react-scroll';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faEnvelope, faHeadset } from '@fortawesome/free-solid-svg-icons';

import './landing.scss';

const LandingPresentation = ({landingData}) => {
    const handleNavigation = (destination) => {
        setTimeout(() => {
            scroller.scrollTo(destination, {
                smooth: true,
                offset: 0,
                duration: 1000,
            });
        }, 500);
      }

    return (
        <div className='container'>
        <div className="landing__section inside-container" id="home">
            <div className="landing__text">
                <h1>
                    {landingData.greeting}
                </h1>

                <section 
                    className="landing__contact"
                >
                    <button 
                        onClick={() => handleNavigation("contact")} 
                        className='flat-button'
                    >
                        <FontAwesomeIcon icon={faEnvelope} /> {landingData.btnContact}
                    </button>
                    <a
                        className='flat-button'
                        href="https://zcal.co/jerome-baille"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faHeadset} /> {landingData.btnMeeting}
                    </a>
                </section>
                <div className='landing__seeMore'>
                    <button 
                        onClick={() => handleNavigation("about")} 
                        className='flat-button'
                    >
                        {landingData.btnAbout}
                    </button>
                    <FontAwesomeIcon icon={faAngleDown} bounce size="2xl" style={{color: "#335384"}} />
                </div>
            </div>
        </div>
        </div>
    )
}

export default LandingPresentation;