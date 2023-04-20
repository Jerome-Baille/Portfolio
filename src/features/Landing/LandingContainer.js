import { useEffect, useState, useContext } from 'react'
import Loader from 'react-loaders'

import LandingPresentation from './LandingPresentation'
import en from '../../locales/en.json'
import fr from '../../locales/fr.json'

import { LanguageContext } from '../Layout/MainLayout';

const LandingContainer = () => {
  const [landingData, setLandingData] = useState({});

  const { language } = useContext(LanguageContext);

  useEffect(() => {
    if (landingData[language]) {
      return;
    }
    language === 'fr' ? setLandingData(fr.home) : setLandingData(en.home);
  }, [language, landingData, setLandingData])


  if(!Object.keys(landingData).length) {
    return <Loader type="pacman" />
  } 

  return (
    <LandingPresentation 
        landingData={landingData} 
    />
  )
}

export default LandingContainer;
