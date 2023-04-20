import { useContext, useEffect, useMemo, useState } from 'react';
import { useParams } from "react-router-dom";
import Loader from 'react-loaders'
import ProjectsDetailPresentation from './ProjectsDetailPresentation';
import projectList from '../../../assets/projectList.json';
import en from '../../../locales/en.json';
import fr from '../../../locales/fr.json';
import { LanguageContext } from '../../Layout/MainLayout';

const ProjectsDetailContainer = () => {
    const { language } = useContext(LanguageContext);
    const [projectsDataLocale, setProjectsDataLocale] = useState({});
    const [projectDataGeneric, setProjectsDataGeneric] = useState();
    const { id } = useParams()

    useEffect(() => {
        let filteredData = {};
        const projectData = language === 'fr' ? fr.projects : en.projects;

        filteredData.skillsTitle = projectData.skillsTitle;
        filteredData.stackTitle = projectData.stackTitle;
        filteredData.improvementTitle = projectData.improvementTitle;
        filteredData.backBtn = projectData.backBtn;

        filteredData = {...filteredData, ...projectData[id]};

        setProjectsDataLocale(filteredData);
        setProjectsDataGeneric(projectList[id]);
    }, [language, id]);

    const technologyList = useMemo(() => {
        return require('../../../assets/technologyList.json');
      }, []);

    if(!Object.keys(projectsDataLocale).length || !Object.keys(projectDataGeneric).length) {
        return <Loader type="pacman" />
    }

    return (
        <ProjectsDetailPresentation 
            projectDataGeneric={projectDataGeneric} 
            projectsDataLocale={projectsDataLocale}
            technologyList={technologyList}
        />
    );
};

export default ProjectsDetailContainer;
