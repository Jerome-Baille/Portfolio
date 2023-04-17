import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CustomCard from '../../components/CustomCard';

const CertificationsPresentation = ({ 
    certificationsDataGeneric, 
    certificationsDataLocale,
    onSelectOption
}) => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (event) => {
        const option = event.target.value;
        setSelectedOption(option);
        onSelectOption(option);
      };

    return (
        <div className='container projects-page'>
            <section className='project-section inside-container'>
                <h1>
                    {certificationsDataLocale.title}
                </h1>
                <p>
                    {certificationsDataLocale.subtitle}
                </p>

                <FormControl 
                    sx={{ 
                        minWidth: 250,
                        marginBottom: 2,
                    }}
                >
                    <InputLabel id="demo-simple-select-label">
                        {certificationsDataLocale.filters.label}
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectedOption}
                        label={certificationsDataLocale.filters.label}
                        onChange={handleSelectChange}
                    >
                        {Object.entries(certificationsDataLocale.filters.type).map(([key, value]) => (
                            <MenuItem key={key} value={key}>
                                {value}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <section className='animation-container'>
                    <div className="card-container">
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
            </section>
        </div>
    )
}

export default CertificationsPresentation;