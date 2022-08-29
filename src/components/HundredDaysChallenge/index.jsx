import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { getHundredDaysOfCSS } from '../../services/service'

// import { getAbout, getStack } from '../../services/service';

const HundredDaysChallenge = () => {
    const [hundredDays, setHundredDays] = useState([])
    const [letterClass, setLetterClass] = useState('text-animate')
    // const [about, setAbout] = useState([])
    // const [stack, setStack] = useState([])

  useEffect(() => {
    setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 3000)

    getHundredDaysOfCSS().then(data => {
        setHundredDays(data)
    }).catch(err => {
        console.log(err)
    })
  }, [])

  function getDay(string){
    return string.split(' ')[1]
  }

return (
    <>
    <div className="container">
        <section className="challenge-section">
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['1','0','0',' ','D', 'a', 'y','s',' ','O','f',' ','C','S','S']}
                    idx={15}
                    />
                </h1>
                <p>
                    Here is my take on the famous 100 days of CSS challenge.
                    Click on "See the pen" to check out the code.
                </p>
                <div id="css-challenge-container">
                    {Object.keys(hundredDays).map((hundredDay, index) => (
                        <div className="pen" key={index}>
                            <div className='penContainer'>
                            <iframe 
                                height="400" 
                                width="400"
                                scrolling="no" 
                                title={hundredDays[hundredDay].title} 
                                src={`${hundredDays[hundredDay].src}?default-tab=result&theme-id=light`} 
                                frameBorder="no" 
                                loading="lazy" 
                                allowtransparency="true" 
                                allowFullScreen={true}
                                sandbox="allow-scripts allow-same-origin"
                                className="penIframe"
                            />
                            </div>
                            <div className='pen-footer'>
                                <a 
                                    href={`https://100dayscss.com/days/${getDay(hundredDays[hundredDay].name)}`}
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                >
                                    {hundredDays[hundredDay].name}
                                </a>
                                <span>
                                    <a href={hundredDays[hundredDay].src}>See the Pen </a>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
        </section>
    </div>
    <Loader type="pacman"/>
    </>
)
}

export default HundredDaysChallenge