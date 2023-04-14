import { useEffect, useMemo, useState, useContext } from 'react'
import Loader from 'react-loaders'

import ContactPresentation from './ContactPresentation'
import en from '../../locales/en.json'
import fr from '../../locales/fr.json'

import { LanguageContext } from '../Layout';

const ContactContainer = () => {
  const [contactData, setContactData] = useState({});

  const { language } = useContext(LanguageContext);

  useEffect(() => {
    if (aboutData[language]) {
      return;
    }
    language === 'fr' ? setContactData(fr.contact) : setContactData(en.contact);
  }, [language, contactData, setContactData])

  if(!Object.keys(aboutData).length || !Object.keys(technologyList).length) {
    return <Loader type="pacman" />
  } 

  return (
    <ContactPresentation 
        contactData={contactData} 
    />
  )


}

export default ContactContainer;
