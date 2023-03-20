import React, { useState, useContext } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import CVen from '../../../assets/pdf/EN/Jerome BAILLE - Frontend Developer.pdf';
import CVfr from '../../../assets/pdf/FR/Jérôme BAILLE - Développeur Frontend.pdf';
import { LanguageContext } from '../../Layout';

const MobileNavbar = () => {
  const { language }= useContext(LanguageContext);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const linksEn = [
    { title: 'Home', link: '/' },
    { title: 'About Me', link: '/about' },
    { title: 'My Projects', link: '/projects' },
    { title: 'Training', link: '/blog' },
    { title: 'Contact Me', link: '/contact' },
  ];

  const linksFr = [
    { title: 'Accueil', link: '/' },
    { title: 'À propos', link: '/about' },
    { title: 'Mes projets', link: '/projects' },
    { title: 'Projets en cours', link: '/blog' },
    { title: 'Me contacter', link: '/contact' },
  ];

  const externalLinksEn = [
    { title: 'My CV', link: CVen },
    { title: 'LinkedIn Profile', link: 'http://www.linkedin.com/in/jerome-baille/' },
    { title: 'GitHub Profile', link: 'https://github.com/Jerome-Baille' },
  ];

  const externalLinksFr = [
    { title: 'Mon CV', link: CVfr },
    { title: 'Profil LinkedIn', link: 'http://www.linkedin.com/in/jerome-baille/' },
    { title: 'Profil GitHub', link: 'https://github.com/Jerome-Baille' },
  ];

  const list = (
    <div
      role="presentation"
      onClick={handleDrawerClose}
      onKeyDown={handleDrawerClose}
      className='navbar--mobile__container'
    >
      <List
            className='navbar--mobile__list'
      >
        {(language==='fr'? linksFr : linksEn).map((link, index) => (
          <NavLink
            key={index}
            to={link.link}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <ListItemText 
              primaryTypographyProps={{ fontSize: '1.5rem' }}
              primary={link.title} 
            />
          </NavLink>
        ))}
      </List>
      <div>
        <Divider />
        <List
          className='navbar--mobile__list'
        >
          {(language==='fr'? externalLinksFr : externalLinksEn).map((link, index) => (
            <a
              key={index}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <ListItemText 
                primaryTypographyProps={{ fontSize: '1.5rem' }}
                primary={link.title} 
                />
            </a>
          ))}
        </List>
      </div>
    </div>
  );

  return (
    <>
      <IconButton
        edge="start"
        aria-label="menu"
        className='navbar--mobile__icon' 
        onClick={handleDrawerOpen}
      >
        <MenuIcon/>
      </IconButton>
      <Drawer open={openDrawer} onClose={handleDrawerClose}>
        {list}
      </Drawer>
    </>
  );
};

export default MobileNavbar;
