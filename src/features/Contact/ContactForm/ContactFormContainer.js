import React, { useState } from 'react';
import emailjs from '@emailjs/browser'
import ContactForm from '../../../components/CustomForm'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Snackbar from '@mui/material/Snackbar';

const ContactFormContainer = ({ formData }) => {
    const [showAlert, setShowAlert] = useState(false);
    const [state, setState] = useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
        type: 'success'
      });
    const { vertical, horizontal, open, type } = state;
    
    const toggleToast = (type) => {
        setState({ ...state, open: !open, type });
        setShowAlert(!showAlert);
    };

    const handleFormSubmit = (values) => {
        emailjs
        .send(
            'service_pn9jjpq',
            'template_396vp3p',
            values,
            'qB7TpUDmabvmgndWA'
        )
        .then(
            () => {
                toggleToast('success');
            },
            () => {
                toggleToast('error');
            }
        )
    };

    return (
        <>
            {showAlert && (
                <Snackbar 
                    anchorOrigin={{ vertical, horizontal }}
                    open={open} 
                    autoHideDuration={4000} 
                    onClose={toggleToast}
                    key={{ vertical, horizontal }}
                >
                    <Alert  
                        onClose={toggleToast} 
                        severity={type} 
                        sx={{ width: '100%' }}
                    >
                        <AlertTitle>{type === 'success' ? formData.toast.success.title : formData.toast.error.title}</AlertTitle>
                        {type === 'success' ? formData.toast.success.message : formData.toast.error.message}
                    </Alert>
                </Snackbar>
            )}
            <ContactForm 
                formData={formData} 
                onSubmit={handleFormSubmit}
            />
        </>
    )
}

export default ContactFormContainer