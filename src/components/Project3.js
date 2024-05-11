import { useState } from 'react';
import './Body.css';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function FifaAddictRedesign() {
    const [currentImage, setCurrentImage] = useState(process.env.PUBLIC_URL + "/images/homepage.png");
    const toggleImage = () => {
        setCurrentImage(currentImage === process.env.PUBLIC_URL + "/images/homepage.png" ? process.env.PUBLIC_URL + "/images/final_WebAIM.png" : process.env.PUBLIC_URL + "/images/homepage.png");
    };

    return (
        <div className='body-container'>
            <h1 className='title'>Redesigning FIFAaddict: Enhancing User Experience for Gamers</h1>
            <h2 className='subtitle'>Improving Navigation and Accessibility</h2>
            <img src={currentImage} alt="FIFAaddict interface" className="project-image" />

            <h2 className='subtitle-content'>Introduction</h2>
            <p className='content'>
                FIFAaddict serves as a crucial resource for the FIFA Online 4 community, providing tools and databases essential for gameplay enhancement. Despite its utility, initial usability and accessibility challenges hindered user experience, prompting a comprehensive redesign.
            </p>

            <h2 className='subtitle-content'>User Research and Competitive Analysis</h2>
            <p className='content'>
                Initial steps included gathering user feedback and conducting a competitive analysis. These efforts highlighted several areas for improvement, such as the site's visual hierarchy and navigational structure, which were confusing and inefficient.
            </p>

            <h2 className='subtitle-content'>Design Process and Iterations</h2>
            <p className='content'>
                Design iterations focused on simplifying the user interface and improving accessibility. Early sketches transitioned into more refined wireframes as the design evolved, with continuous user feedback shaping each stage.
            </p>
            <img src={process.env.PUBLIC_URL + "/images/sketches.png"} alt="Design sketches" className="project-image" />

            <h2 className='subtitle-content'>Technical Implementation</h2>
            <p className='content'>
                The technical implementation involved React for building a dynamic and responsive interface. Significant features included a streamlined navigation bar, enhanced search functionality, and better content organization using Material UI components.
            </p>

            <h2 className='subtitle-content'>Final Design and User Feedback</h2>
            <p className='content'>
                The redesigned interface was well-received, characterized by its user-friendly layout and improved accessibility. Users particularly appreciated the clear visual distinctions between different sections and the responsive design elements.
            </p>
            <div className="image-container">
                <IconButton onClick={toggleImage} aria-label="Toggle image">
                    <ArrowForwardIosIcon />
                </IconButton>
            </div>

            <h2 className='subtitle-content'>Conclusion and Future Directions</h2>
            <p className='content'>
                Reflecting on the redesign process, the integration of user feedback was instrumental in achieving a design that not only met but exceeded user expectations. Future updates will focus on expanding features based on new user insights and technological advancements.
            </p>
        </div>
    );
}

export default FifaAddictRedesign;
