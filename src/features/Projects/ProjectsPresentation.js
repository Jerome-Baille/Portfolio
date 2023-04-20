import React, { useEffect, useRef, useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const ProjectsPresentation = ({ 
    projectDataGeneric, 
    projectsDataLocale,
    onSelectOption
}) => {
    const [selectedOption, setSelectedOption] = useState('');
    const componentRef = useRef(null);

    const handleSelectChange = (event) => {
        const option = event.target.value;
        setSelectedOption(option);
        onSelectOption(option);
      };

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    componentRef.current.classList.add('animate');
                } 
            });
        });
        observer.observe(componentRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div className='container projects-page' ref={componentRef}>
            <section className='project-section inside-container'>
                <h1>
                    {projectsDataLocale.title}
                </h1>
                <p>
                    {projectsDataLocale.subtitle}
                </p>

                <FormControl 
                    sx={{ 
                        minWidth: 250,
                        marginBottom: 5,
                    }}
                >
                    <InputLabel id="demo-simple-select-label">
                        {projectsDataLocale.filters.label}
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectedOption}
                        label={projectsDataLocale.filters.label}
                        onChange={handleSelectChange}
                        MenuProps={{
                            disableScrollLock: true,
                          }}
                    >
                        {Object.entries(projectsDataLocale.filters.type).map(([key, value]) => (
                            <MenuItem key={key} value={key}>
                                {value}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <div className="card-projects">
                    {Object.keys(projectDataGeneric).map((project, index) => (
                        <Card
                            key={index}
                            sx={{ 
                                position: 'relative',
                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.16)',
                                transition: 'box-shadow 0.2s ease-in-out',
                                '&:hover': {
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.24)'
                                }
                            }}
                        >
                            <CardMedia
                                component="img"
                                image={process.env.PUBLIC_URL + projectDataGeneric[project]?.logo}
                                alt={projectsDataLocale[project]?.title + ' logo'}
                            />
                            <Link 
                                to={`/projects/${projectDataGeneric[project]?.id}`} 
                                className="card-link" 
                                aria-label={'See more about ' + projectsDataLocale[project]?.title} 
                            />
                        </Card>
                    ))}
                </div>
                {/* <div className="projects-wrapper--preview">
                    {Object.keys(projectDataGeneric).map((project, index) => (
                        <div className="flip-card-container" key={index}>
                            <div className="flip-card">
                                <div className="flip-card-front">
                                    <img src={process.env.PUBLIC_URL + projectDataGeneric[project]?.logo} alt={projectsDataLocale[project]?.title + ' logo'} />
                                </div>
                                <div className="flip-card-back">
                                    <h3>
                                        {projectsDataLocale[project]?.title}
                                    </h3>
                                    <p>{projectsDataLocale[project]?.subtitle}</p>
                                    <p>{projectDataGeneric[project]?.tags.split(',').map(item => `#${item.trim()}`).join(' ')}</p>
                                    <div className='card-footer'>
                                        <a 
                                            href={projectDataGeneric[project]?.github} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className='github-link' 
                                            aria-label={projectsDataLocale[project]?.title + ' GitHub'}
                                        >
                                            <FontAwesomeIcon icon={faGithub} />
                                        </a>

                                        {projectDataGeneric[project].demo? 
                                            <a 
                                                href={projectDataGeneric[project]?.demo} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className='demo-link' 
                                                aria-label={projectsDataLocale[project]?.title + ' live demo'}
                                            >
                                                <FontAwesomeIcon icon={faInternetExplorer} />
                                            </a> 
                                            : null 
                                        }
                                    </div>
                                    <Link 
                                        to={`/projects/${projectDataGeneric[project]?.id}`} 
                                        className="card-link" 
                                        aria-label={'See more about ' + projectsDataLocale[project]?.title} 
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div> */}
            </section>
        </div>
    );
};

export default ProjectsPresentation;