import { useEffect, useState, useContext } from 'react'
import Loader from 'react-loaders'

import HomePresentation from './HomePresentation'
import en from '../../locales/en.json'
import fr from '../../locales/fr.json'

import { LanguageContext } from '../Layout';

const HomeContainer = () => {
  const [homeData, setHomeData] = useState({});

  const { language } = useContext(LanguageContext);

  useEffect(() => {
    if (homeData[language]) {
      return;
    }
    language === 'fr' ? setHomeData(fr.home) : setHomeData(en.home);
  }, [language, homeData, setHomeData])


  if(!Object.keys(homeData).length) {
    return <Loader type="pacman" />
  } 

  return (
    <HomePresentation 
        homeData={homeData} 
    />
  )


}

export default HomeContainer;
