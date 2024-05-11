import React from 'react';
import './Project.css'; // Importing the CSS

function Project3() {
    return (
        <div className='body'>
            <h1 className='title'>FIFAaddict Redesign</h1>
            <h2 className='subtitle'>Discovering the Game Beyond the Game</h2>
            <img src={process.env.PUBLIC_URL + "/images/homepage.png"} alt="FIFAaddict homepage redesign" className="project-image" />

            <h2 className='subtitle-content'>Introduction</h2>
            <p className='content'>
                When first visiting FIFAaddict, a tool beloved by FIFA Online 4 enthusiasts for its comprehensive player database and statistical tools, I was struck by its potential—and its problems. The site promised functionality but delivered frustration, with a homepage mired in usability issues that obscured its capabilities.
            </p>

            <h2 className='subtitle-content'>The Challenge</h2>
            <p className='content'>
                Tasked with redesigning FIFAaddict, my mission was clear: transform a cluttered, unfriendly user interface into a welcoming, efficient experience that gamers could return to with pleasure—not dread.
            </p>

            <h2 className='subtitle-content'>User Research</h2>
            <p className='content'>
                I embarked on a journey starting with user research, reaching out to fellow gamers to gather insights. Their feedback was invaluable, highlighting a universal desire for a cleaner layout and quicker access to essential features.
            </p>

            <h2 className='subtitle-content'>Design Insights and Iterations</h2>
            <p className='content'>
                Drawing on competitive analysis and direct user feedback, I began sketching out concepts. Each iteration brought clarity and purpose, focusing on streamlining the user journey from login to game analysis.
            </p>
            <img src={process.env.PUBLIC_URL + "/images/sketches.png"} alt="Design sketches for FIFAaddict" className="project-image" />

            <h2 className='subtitle-content'>Revamping the Interface</h2>
            <p className='content'>
                With each prototype, from low-fidelity to high-fidelity, the interface evolved. The redesign centered around a simplified navigation system, enhanced search functionality, and improved visual hierarchy that guides the user's eye naturally through the site.
            </p>
            <iframe style={{width: '100%', height: '450px', border: '1px solid rgba(0, 0, 0, 0.1)'}} src="https://www.figma.com/embed?embed_host=share&url=FIGMA_FILE_LINK" allowFullScreen></iframe>

            <h2 className='subtitle-content'>Solution and Impact</h2>
            <p className='content'>
                The final design was a harmonious blend of functionality and aesthetics. It was not just a redesign; it was a rethinking of how FIFAaddict could serve its community better. Post-launch feedback was overwhelmingly positive, with users celebrating the ease of navigation and the appealing new layout.
            </p>

            <h2 className='subtitle-content'>Reflections and Next Steps</h2>
            <p className='content'>
                This project was more than a design overhaul; it was a lesson in empathy, collaboration, and agile responses to user needs. Looking ahead, the plan is to continually refine the features based on ongoing user feedback, ensuring FIFAaddict remains at the forefront of gaming tools.
            </p>

            <h2 className='subtitle-content'>Concluding Thoughts</h2>
            <p className='content'>
                Through this redesign, I've learned the importance of aligning technical capabilities with user expectations, creating a bridge between what is possible and what is needed. As we move forward, our focus will stay fixed on empowering users, ensuring their journey through FIFA Online 4 is as thrilling as the game itself.
            </p>
        </div>
    );
}

export default Project3;
