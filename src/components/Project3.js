import React from 'react';
import './Project.css'; // Importing the CSS

function Project3() {
    return (
        <div className='body'>
            <h1 className='title'>FIFAaddict Redesign</h1> {/* Title in h1 for semantic importance */}
            <h2 className='subtitle'>What do you use to get information on the video game FIFA?</h2> {/* Subtitle */}
            <img src={process.env.PUBLIC_URL + "/images/homepage.png"} alt="FIFAaddict homepage redesign" className="project-image" />

            <h2 className='subtitle-content'>Problem & Background</h2>
            <p className='content'>
                FIFAaddict is a popular tool among FIFA Online 4 gamers but suffered from usability and accessibility issues. The cluttered layout, poor visual hierarchy, and inadequate color contrasts hindered user experience. Motivated by personal experience and feedback from fellow players, I undertook the redesign to enhance navigation and overall functionality.
            </p>

            <h2 className='subtitle-content'>User Research</h2>
            <p className='content'>
                User research involved analyzing competitor sites, collecting feedback from current users, and understanding the core functionalities that users valued most. This helped identify the essential features needed on the homepage and guided the redesign of user interactions.
            </p>

            <h2 className='subtitle-content'>Objective</h2>
            <p className='content'>
                The main goal was to simplify the homepage to focus on the search functionality, improve accessibility standards, and ensure a clear visual hierarchy that enhances user flow and engagement.
            </p>

            <h2 className='subtitle-content'>Process</h2>
            <p className='content'>
                Starting with quick sketches, I moved to creating lo-fi wireframes that reorganized the layout to emphasize the search bar and de-clutter the interface. After iterative feedback, hi-fi prototypes were developed to refine visual elements and interactivity.
            </p>

            <h2 className='subtitle-content'>Impact</h2>
            <p className='content'>
                The redesign led to a more intuitive and accessible interface, demonstrated by positive user feedback and improved engagement metrics. The clearer layout and enhanced navigation facilitated quicker and more efficient user interactions.
            </p>

            <h2 className='subtitle-content'>Next Steps</h2>
            <p className='content'>
                Future updates will focus on enhancing mobile responsiveness and adding more personalized features based on user data and trends. Continuous testing and feedback will guide further improvements to ensure the platform meets evolving user needs.
            </p>
        </div>
    );
}

export default Project3;
