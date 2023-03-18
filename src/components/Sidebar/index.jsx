import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import MobileNavbar from './MobileNavbar';
import DesktopNavbar from './DesktopNavbar';

const Sidebar = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return isMobile ? <MobileNavbar /> : <DesktopNavbar />;
};

export default Sidebar;