import React, { useEffect, useRef, useState } from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import CustomCard from '../../components/CustomCard';

import './certifications.scss';

const CertificationsPresentation = ({ 
    certificationsDataGeneric, 
    certificationsDataLocale,
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
            <section className='certifications__section inside-container'>
                <h1>
                    {certificationsDataLocale.title}
                </h1>
                <p>
                    {certificationsDataLocale.subtitle}
                </p>

                <FormControl 
                    sx={{ 
                        minWidth: 250,
                    }}
                >
                    <InputLabel id="select-certifications-label">
                        {certificationsDataLocale.filters.label}
                    </InputLabel>
                    <Select
                        labelId="select-certifications-label"
                        id="select-certifications"
                        value={selectedOption}
                        label={certificationsDataLocale.filters.label}
                        onChange={handleSelectChange}
                        MenuProps={{
                            disableScrollLock: true,
                          }}
                    >
                        {Object.entries(certificationsDataLocale.filters.type).map(([key, value]) => (
                            <MenuItem key={key} value={key}>
                                {value}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <div className="certifications__cards">
                    {Object.keys(certificationsDataGeneric).map((certification, index) => (
                        <CustomCard 
                            key={index}
                            dataCardGeneric={certificationsDataGeneric[certification]}
                            dataCardLocale={certificationsDataLocale[certification]}
                            modal={certificationsDataLocale.modal}
                        />
                    ))}
                </div>
            </section>
        </div>
    )
}

export default CertificationsPresentation;