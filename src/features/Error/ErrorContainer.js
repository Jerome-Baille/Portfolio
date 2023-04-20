import { useContext, useEffect, useState } from 'react'
import Loader from 'react-loaders'

import en from '../../locales/en.json'
import fr from '../../locales/fr.json'

import ErrorPresentation from './ErrorPresentation'

import { LanguageContext } from '../Layout/MainLayout';


const Error404 = () => {
    const [errorData, setErrorData] = useState({});
    const { language } = useContext(LanguageContext);
  
    useEffect(() => {
      if (errorData[language]) {
        return;
      }
      language === 'fr' ? setErrorData(fr.error) : setErrorData(en.error);
      console.log(errorData)
    }, [language, errorData, setErrorData])

    if(!Object.keys(errorData).length) {
        return <Loader type="pacman" />
    }

    return (
        <ErrorPresentation 
            errorData={errorData}
        />
    );
    }

export default Error404;