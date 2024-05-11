import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

function Projects() {
  const projects = [
    { id: 1, title: "Partiful", path: "/project1", description: "Redesigned a party invitation app for college/frats", image: process.env.PUBLIC_URL + "/images/balloon.webp" },
    { id: 2, title: "Biol", path: "/project2", description: "Designed a biography app", image: process.env.PUBLIC_URL + "/images/camera.webp"},
    { id: 3, title: "FIFAaddict", path: "/project3", description: "Redesigned a soccer video game website used for player statistics", image: process.env.PUBLIC_URL + "/images/soccer.webp" }
  ];

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section id="projects" className="projects">
      <header1>Selected Works</header1>
      <div className="project-list">
        {projects.map(project => (
          <Link 
            to={project.path} 
            key={project.id} 
            className="project" 
            style={{ backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundRepeat:'no-repeat', backgroundPosition: 'center' }}
            onClick={scrollToTop}
            aria-label={project.title} 
          >
            <div className="project-overlay">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Projects;
