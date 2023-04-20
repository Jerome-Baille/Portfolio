import React, { useEffect, useRef, useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import './projects.scss';

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
        <div className='container' ref={componentRef}>
            <section className='projects__section inside-container'>
                <header className='projects__header'>
                    <h1>
                        {projectsDataLocale.title}
                    </h1>
                    <p>
                        {projectsDataLocale.subtitle}
                    </p>
                </header>

                <FormControl 
                    sx={{ 
                        minWidth: 250,
                    }}
                >
                    <InputLabel id="select-technology-label">
                        {projectsDataLocale.filters.label}
                    </InputLabel>
                    <Select
                        labelId="select-technology-label"
                        id="select-technology"
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

                <div className="projects__cards">
                    {Object.keys(projectDataGeneric).map((project, index) => (
                        <Card
                            key={index}
                            sx={{ 
                                position: 'relative',
                                maxWidth: '300px',
                                margin: '0 auto',
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
                                alt={projectsDataLocale[project]?.logo.alt}
                            />
                            <Link 
                                to={`/projects/${projectDataGeneric[project]?.id}`} 
                                className="projects__cards__link" 
                                aria-label={projectsDataLocale.link.label + projectsDataLocale[project]?.title} 
                            />
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ProjectsPresentation;