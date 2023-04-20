import { Link } from 'react-router-dom'
import './error.scss';

const ErrorPresentation = ({ errorData }) => {
    return (
        <div className="container">
            <section className="error inside-container">
                <div className='error__text'>
                    <header className='error__header'>
                        <h1>
                            {errorData[404].title}
                        </h1>
                        <h3>
                            {errorData[404].subtitle}
                        </h3>
                    </header>
                    <p>
                        {errorData[404].description}
                    </p>

                    <div className='error__button'>
                        <Link to="/" className='flat-button'>{errorData[404].btnHome}</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ErrorPresentation;