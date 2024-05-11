import React from 'react';
import './Project.css'; // Importing the CSS

function Project2() {
    return (
        <div className='body'>
            <h1 className='title'>Interactive Biography Favorites Interface</h1> {/* Title in h1 for semantic importance */}
            <h2 className='subtitle'>How do you effectively manage information about notable figures?</h2> {/* Subtitle */}
            <img src={process.env.PUBLIC_URL + "/images/biography-interface.jpg"} alt="Interface design for biography favorites" className="project-image" />

            <h2 className='subtitle-content'>Introduction</h2>
            <p className='content'>
                This project focuses on designing and developing an interactive interface using React that enables users to favorite biographies of notable figures. The need for such an interface was identified from a lack of efficient favoriting and aggregator functions in existing platforms.
            </p>

            <h2 className='subtitle-content'>Competitive Analysis</h2>
            <p className='content'>
                A competitive analysis of three websites with favoriting functionalities—realtor.com, allrecipes.com, and bigfuture.collegeboard.org—revealed gaps in usability and accessibility that informed the design of our biography favoriting interface. This analysis was instrumental in understanding how to better structure our information and enhance user interaction.
            </p>

            <h2 className='subtitle-content'>Objective</h2>
            <p className='content'>
                The objective was to create a user-friendly interface that simplifies how users interact with biographies. Features were designed to allow users to easily manage their favorite figures through a favoriting function integrated with robust filtering and sorting capabilities.
            </p>

            <h2 className='subtitle-content'>Creating Interface</h2>
            <p className='content'>
                The interface includes two filtering categories (Gender and Occupation) and two sorting features (Name and Age), alongside a dynamic aggregation section labeled "Favorite Biographies." This section updates in real time as users add or remove figures from their favorites.
            </p>

            <h2 className='subtitle-content'>Deployment</h2>
            <p className='content'>
                The completed app is deployed through Vercel, showcasing a responsive and interactive design that adheres to modern web standards and provides an excellent user experience. The deployment can be viewed at <a href="https://biography-app.vercel.app/" target="_blank" rel="noopener noreferrer">biography-app.vercel.app</a>.
            </p>

            <h2 className='subtitle-content'>Impact</h2>
            <p className='content'>
                Post-launch feedback has been overwhelmingly positive, with users appreciating the streamlined approach to managing and accessing biographical information. The interface has significantly improved the usability and accessibility of the information.
            </p>

            <h2 className='subtitle-content'>Next Steps</h2>
            <p className='content'>
                Future developments will include more advanced filtering options, enhanced personalization features, and potentially incorporating machine learning to predict user preferences. Continued user feedback will guide these improvements to further refine the experience.
            </p>
        </div>
    );
}

export default Project2;
