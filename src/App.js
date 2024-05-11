import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Project1 from './components/Project1';
import Project2 from './components/Project2';
import Project3 from './components/Project3';


function App() {
  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route path="/" element={<main><About /><Projects /></main>} />
        <Route path="/project1" element={<Project1 />} />
        <Route path="/project2" element={<Project2 />} />
        <Route path="/project3" element={<Project3 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
