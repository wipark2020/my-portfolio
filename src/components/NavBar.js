import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    if (path === "/") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (path === "/#projects") {
      if (location.pathname === '/') {
        const section = document.getElementById('projects');
        section && section.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/', { replace: true, state: { scrollToProjects: true } });
      }
    } else {
      navigate(path);
    }
  };

  React.useEffect(() => {
    if (location.state?.scrollToProjects) {
      const section = document.getElementById('projects');
      section && section.scrollIntoView({ behavior: 'smooth' });
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo" onClick={() => handleNavigation('/')} aria-label="Home">William Park</Link>
      <div className="nav-links">
        <a className="nav-item" onClick={() => handleNavigation('/#projects')} aria-label="Selected Works">
          Selected Works
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 152.9 43.4">
            <path d="M151.9,13.6c0,0,3.3-9.5-85-8.3c-97,1.3-58.3,29-58.3,29s9.7,8.1,69.7,8.1c68.3,0,69.3-23.1,69.3-23.1 s1.7-10.5-14.7-18.4"/>
          </svg>
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
