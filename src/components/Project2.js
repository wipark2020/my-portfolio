import React from 'react';
import './Project.css'; // Importing the CSS

function Project2() {
    return (
        <div className='body'>
            <h1 className='title'>Biol Design</h1> {/* Title in h1 for semantic importance */}
            <h2 className='subtitle'>What do you use to get information on people?</h2> {/* Subtitle */}
            <img src="path/to/your/image.jpg" alt="Description of Image" className="project-image" />
            <p>This is a detailed page for Project 1.</p>
            {/* Continue adding <p> tags or other content as needed */}
        </div>
    );
}

export default Project2;
