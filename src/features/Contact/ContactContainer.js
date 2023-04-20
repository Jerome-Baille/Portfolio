import { useEffect, useState, useContext } from 'react'
import Loader from 'react-loaders'

import en from '../../locales/en.json'
import fr from '../../locales/fr.json'

import ContactPresentation from './ContactPresentation'
import { LanguageContext } from '../Layout/MainLayout';

const ContactContainer = () => {
  const [contactData, setContactData] = useState({});
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    if (contactData[language]) {
      return;
    }
    language === 'fr' ? setContactData(fr.contact) : setContactData(en.contact);
  }, [language, contactData, setContactData])



  if(!Object.keys(contactData).length) {
    return <Loader type="pacman" />
  } 

  return (
    <ContactPresentation 
        contactData={contactData} 
    />
  )
}

export default ContactContainer;
