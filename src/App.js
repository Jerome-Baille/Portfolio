import { Routes, Route } from 'react-router-dom';
import Home from './features/Layout/HomeLayout';
import About from './features/About/AboutContainer';
import Contact from './features/Contact/ContactContainer';
import Layout from './features/Layout/MainLayout';
import Projects from './features/Projects/ProjectsContainer';
import DetailPage from './features/Projects/ProjectsDetailPage/ProjectsDetailContainer';
import Error from './features/Error/ErrorContainer';
import './App.scss';
import Certifications from './features/Certifications/CertificationsContainer';
import Landing from './features/Landing/LandingContainer';



function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Landing />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:id"  element={<DetailPage />} />
        <Route path="certifications" element={<Certifications />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  )
}

export default App;
