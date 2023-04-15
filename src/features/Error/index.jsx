import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../../components/AnimatedLetters'

const Error404 = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
        setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <div className="container">
            <section className="error inside-container">
                <div className='error-text'>
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['O','o','p','s','!',' ','E','r','r','o','r',' ','4','0','4']}
                        idx={15}
                        />
                    </h1>
                    <h2>
                        The page you're looking for doesn't exist.
                    </h2>
                    <p>
                        Just click the button bellow to safely return home!
                    </p>

                    <div className='main-btn'>
                        <Link to="/" className='flat-button'>Home</Link>
                    </div>
                </div>
            </section>
        </div>
    );
    }

export default Error404;