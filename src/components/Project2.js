import React from 'react';
import './Project.css'; // Importing the CSS

function FifaAddictRedesign() {
    return (
        <div className='body'>
            <h1 className='title'>FifaAddict</h1>
            <h2 className='subtitle'>Revamping the FIFA Online 4 Player Database</h2>
            <img src={process.env.PUBLIC_URL + "/images/homepage.png"} alt="Original FifaAddict Homepage" className="project-image" />

            <h2 className='subtitle-content'>Context and Challenge</h2>
            <p className='content'>
                FifaAddict, a key tool for the gaming community of FIFA Online 4, required a major redesign to enhance user experience and accessibility. Initially overwhelmed by its cluttered design and poor navigational structure, I saw an opportunity to streamline its functionality and aesthetic to better serve its users.
            </p>

            <h2 className='subtitle-content'>Initial Research and User Feedback</h2>
            <p className='content'>
                My approach began with user feedback and an analysis using tools like WebAIM to identify critical usability and accessibility issues. Common feedback highlighted the overwhelming nature of the homepage and the difficulty in navigating through dense, poorly contrasted text.
            </p>

            <h2 className='subtitle-content'>Design Iterations and Decisions</h2>
            <p className='content'>
                The redesign process involved multiple sketches and wireframes, focusing on simplifying the interface and prioritizing the search functionality, essential for player database navigation. Each iteration aimed to declutter the interface, improve text readability, and enhance overall navigational flow.
            </p>

            <img src={process.env.PUBLIC_URL + "/images/final_sketch.jpg"} alt="Final sketch of redesign" className="project-image" />

            <h2 className='subtitle-content'>Developing the Solution</h2>
            <p className='content'>
                Utilizing React, I transformed these designs into a dynamic and responsive web interface. The new layout was structured around a clear visual hierarchy, employing a Z-pattern design to guide the user’s eye through the most important elements seamlessly.
            </p>

            <h2 className='subtitle-content'>Key Features and Implementations</h2>
            <p className='content'>
                Highlights of the redesign include:
                <ul>
                    <li>A focused search bar prominently placed for ease of use.</li>
                    <li>High-contrast color scheme and larger text for better readability and accessibility.</li>
                    <li>Reorganized navigation with intuitive links and a simplified menu to enhance user flow.</li>
                </ul>
            </p>

            <img src={process.env.PUBLIC_URL + "/images/annotations.jpeg"} alt="Annotations on the wireframe" className="project-image" />

            <h2 className='subtitle-content'>Responsive Redesign Outcomes</h2>
            <p className='content'>
                Post-launch analytics indicated a significant improvement in user engagement and satisfaction. The cleaner, more organized layout led to a decreased bounce rate and higher interaction rates with the database's features.
            </p>

            <img src={process.env.PUBLIC_URL + "/images/final_WebAIM.png"} alt="Final WebAIM analysis" className="project-image" />

            <h2 className='subtitle-content'>Lessons Learned and Next Steps</h2>
            <p className='content'>
                The project underscored the importance of understanding user needs and the impact of visual and navigational design on user experience. Future updates will focus on further enhancing mobile responsiveness and integrating more personalized user features.
            </p>

            <h2 className='subtitle-content'>Conclusion</h2>
            <p className='content'>
                This case study illustrates the transformative power of user-centered design and its impact on enhancing functionality in web applications. The FifaAddict redesign not only improved usability but also deepened user engagement, showcasing the effectiveness of thoughtful, iterative design in solving real-world problems.
            </p>
        </div>
    );
}

export default FifaAddictRedesign;
