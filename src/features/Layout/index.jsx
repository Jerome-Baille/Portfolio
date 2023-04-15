import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Particle from '../../components/Particle';

// create a context for the languages
export const LanguageContext = React.createContext();

const Layout = () => {
    const [language, setLanguage] = useState('');

    useEffect(() => {
        const userLanguage = navigator.language || navigator.userLanguage;
        userLanguage.toLowerCase().includes('fr') ? setLanguage('fr') : setLanguage('en');
      }, []);

    return (
        <div className="app">
            <Particle className="particles" />
            <LanguageContext.Provider value={{ language, setLanguage }}>
                <Sidebar />
                <div className="page">
                    <Outlet />
                </div>
            </LanguageContext.Provider>
        </div>
    )
}

export default Layout