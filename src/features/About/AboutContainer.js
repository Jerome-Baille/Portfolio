import { useEffect, useMemo, useState, useContext } from 'react'
import Loader from 'react-loaders'

import AboutPresentation from './AboutPresentation'
import en from '../../locales/en.json'
import fr from '../../locales/fr.json'

import { LanguageContext } from '../Layout';

const AboutContainer = () => {
  const profilePicture = '/images/about/DSC_0703_2.JPG'
  const signature = '/images/about/Signature.png'
  const [aboutData, setAboutData] = useState({});
  const [descriptionButtonType, setDescriptionButtonType] = useState('medium');

  const { language } = useContext(LanguageContext);

  const descriptionOptions = [
    { label: aboutData.shortBtn, value: 'short' },
    { label: aboutData.mediumBtn, value: 'medium' },
    { label: aboutData.longBtn, value: 'long' },
  ];
  
  const descriptionLengthButtons = (
    <div className='descriptionType-container'>
      {descriptionOptions.map((option) => (
        <button
          key={option.value}
          className={`flat-button ${option.value === descriptionButtonType ? 'active' : ''}`}
          onClick={() => setDescriptionButtonType(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );

  useEffect(() => {
    if (aboutData[language]) {
      return;
    }
    language === 'fr' ? setAboutData(fr.about) : setAboutData(en.about);
  }, [language, aboutData, setAboutData])

  const technologyList = useMemo(() => {
    return require('../../assets/technologyList.json');
  }, []);

  if(!Object.keys(aboutData).length || !Object.keys(technologyList).length) {
    return <Loader type="pacman" />
  } 

  return (
    <AboutPresentation 
        descriptionButtonType={descriptionButtonType}
        aboutData={aboutData} 
        technologyList={technologyList} 
        descriptionLengthButtons={descriptionLengthButtons} 
        profilePicture={profilePicture}
        signature={signature}
    />
  )


}

export default AboutContainer;
