import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Particle from '../Particle';

const Layout = () => {
    return (
        <div className="app">
            <Particle className="particles" />
            <Sidebar />
            <div className="page">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout