import React, { useState } from 'react';

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Stack from '@mui/joy/Stack';

import { Link } from 'react-scroll';

import './navbar.scss';

const MobileNavbar = ({
  dataNavbar,
  handleClick
}) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const handleScroll = (key) => {
    return () => {
        handleClick(key);
        setOpenDrawer(false);
    }
}

  const list = (
    <nav
      role="presentation"
      onClick={handleDrawerClose}
      onKeyDown={handleDrawerClose}
      className="navbar--mobile"
    >
      <Stack
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        sx={{ height: '100%' }}
      >
        <List 
          className="navbar--mobile__list"
        >
          {dataNavbar &&
            Object.keys(dataNavbar.intern).map((key) => {
              const link = dataNavbar.intern[key];
              return (
                <Link
                  key={key}
                  exact="true" 
                  activeClass="active"
                  aria-label={link.aria}
                  to={key}
                  spy={true}
                  onClick={handleScroll(key)}
                  className='navbar--mobile__link'
                >
                  <ListItemText
                    primary={link.label}
                  />
                </Link>
              );
            })}
        </List>
        <List 
          className="navbar--mobile__list"
        >
          {dataNavbar &&
            Object.keys(dataNavbar.extern).map((key) => {
              const link = dataNavbar.extern[key];
              return (
                <a
                  key={key}
                  href={link.link}
                  target="_blank"
                  rel="noreferrer"
                  className='navbar--mobile__link'
                >
                  <ListItemText
                    primary={link.label}
                  />
                </a>
              );
            })}
        </List>
      </Stack>
    </nav>
  );
  

  if(!dataNavbar) return null;

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
