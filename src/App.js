import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import ReactGA from 'react-ga';
import Loader from 'react-loaders'

import Error from './features/Error/ErrorContainer';

import './App.scss';

// Initialize Google Analytics with tracking ID
ReactGA.initialize('G-6GKSDNRMEH');

const About = lazy(() => import('./features/About/AboutContainer'));
const Certifications = lazy(() => import('./features/Certifications/CertificationsContainer'));
const Contact = lazy(() => import('./features/Contact/ContactContainer'));
const DetailPage = lazy(() => import('./features/Projects/ProjectsDetailPage/ProjectsDetailContainer'));
const Home = lazy(() => import('./features/Layout/HomeLayout'));
const Landing = lazy(() => import('./features/Landing/LandingContainer'));
const Layout = lazy(() => import('./features/Layout/MainLayout'));
const Projects = lazy(() => import('./features/Projects/ProjectsContainer'));


function App() {
  // Track pageview on component mount
  ReactGA.pageview(window.location.pathname + window.location.search);
  
  return (
    <Suspense fallback={<Loader type="pacman" />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Landing />} />
          <Route path="about" element={<About />} />
          <Route path="certifications" element={<Certifications />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:id"  element={<DetailPage />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App;
