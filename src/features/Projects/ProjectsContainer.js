import { useContext, useEffect, useState } from 'react';
import Loader from 'react-loaders'
import ProjectsPresentation from './ProjectsPresentation';
import projectList from '../../assets/projectList.json';
import en from '../../locales/en.json';
import fr from '../../locales/fr.json';
import { LanguageContext } from '../Layout';

const ProjectsContainer = () => {
    const { language } = useContext(LanguageContext);
    const [projectsDataLocale, setProjectsDataLocale] = useState({});
    const [projectDataGeneric, setProjectsDataGeneric] = useState({});

    useEffect(() => {
        setProjectsDataLocale(language === 'fr' ? fr.projects : en.projects);
        setProjectsDataGeneric(projectList);
    }, [language, projectsDataLocale]);

    if(!Object.keys(projectsDataLocale).length || !Object.keys(projectDataGeneric).length) {
        return <Loader type="pacman" />
    }

    return (
        <ProjectsPresentation 
            projectDataGeneric={projectDataGeneric} 
            projectsDataLocale={projectsDataLocale}
        />
    );
};

export default ProjectsContainer;
