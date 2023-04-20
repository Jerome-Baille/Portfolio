import { useContext, useEffect, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import MobileNavbar from './NavbarMobilePresentation';
import DesktopNavbar from './NavbarDesktopPresentation';
import Fr from '../../locales/fr.json';
import En from '../../locales/en.json';
import { LanguageContext } from '../Layout/MainLayout';
import { useNavigate, useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';

const Sidebar = () => {
  const { language }= useContext(LanguageContext);
  const [dataNavbar, setDataNavbar] = useState();
  const isMobile = useMediaQuery('(max-width: 768px)');

  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (sectionId) => {
      if (location.pathname !== '/') {
          navigate('/');
          setTimeout(() => {
              scroller.scrollTo(sectionId, {
                  smooth: true,
                  offset: 0,
                  duration: 1000,
              });
          }, 500);
      } else {
          scroller.scrollTo(sectionId, {
              smooth: true,
              offset: 0,
              duration: 1000,
          });
      }
  };

  useEffect(() => {
      language==='fr'? setDataNavbar(Fr.navbar) : setDataNavbar(En.navbar);
  }, [language, dataNavbar]);

  if(!dataNavbar) return null;

  return (
      isMobile ? 
      <MobileNavbar 
        dataNavbar={dataNavbar}
        handleClick={handleClick}
      /> 
      : <DesktopNavbar 
        dataNavbar={dataNavbar}
        handleClick={handleClick}
      />
  );
};

export default Sidebar;