import { Routes, Route } from 'react-router-dom';
import Home from './features/Home';
import About from './features/About/AboutContainer';
import Contact from './features/Contact/ContactContainer';
import Layout from './features/Layout';
import Projects from './features/Projects/ProjectsContainer';
import SinglePage from './features/Projects/ProjectsDetailPage/ProjectsDetailContainer';
import Error from './features/Error';
import './App.scss';
import Blog from './features/Blog';
import HundredDaysChallenge from './features/HundredDaysChallenge';
import Training from './features/Training';



function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:id"  element={<SinglePage />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/challenges/:id" element={<HundredDaysChallenge />} />
        <Route path="blog/trainings/:id" element={<Training />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
    </>
  )
}

export default App;
