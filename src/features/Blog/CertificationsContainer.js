import { useContext, useEffect, useState } from 'react';
import Loader from 'react-loaders'
import CertificationsPresentation from './CertificationsPresentation';
import certificationsList from '../../assets/certificationsList.json';
import en from '../../locales/en.json';
import fr from '../../locales/fr.json';
import { LanguageContext } from '../Layout';

const CertificationsContainer = () => {
    const { language } = useContext(LanguageContext);
    const [certificationsDataLocale, setCertificationsDataLocale] = useState({});
    const [certificationsDataGeneric, setCertificationsDataGeneric] = useState({});

    useEffect(() => {
        setCertificationsDataLocale(language === 'fr' ? fr.certifications : en.certifications);
        setCertificationsDataGeneric(certificationsList);
    }, [language, certificationsDataLocale]);

    const handleSelectedOption = (option) => {
        console.log(option)
        if (option.toLowerCase() === "all") {
            setCertificationsDataGeneric(certificationsList);
        } else {
            const filteredCertifications = {};
            for (const [key, value] of Object.entries(certificationsList)) {
                if (value.status.toLowerCase() === option.toLowerCase()) {
                    filteredCertifications[key] = value;
                }
            }
            setCertificationsDataGeneric(filteredCertifications);
        }
    };      

    if(!Object.keys(certificationsDataLocale).length || !Object.keys(certificationsDataGeneric).length) {
        return <Loader type="pacman" />
    }

    return (
        <CertificationsPresentation 
            certificationsDataGeneric={certificationsDataGeneric} 
            certificationsDataLocale={certificationsDataLocale}
            onSelectOption={handleSelectedOption}
        />
    );
}

export default CertificationsContainer;