import React from 'react';
import './Project.css'; // Importing the CSS

function Project1() {
    return (
        <div className='body'>
            <h1 className='title'>Partiful Redesign</h1> {/* Title in h1 for semantic importance */}
            <h2 className='subtitle'>What do you use to invite people to parties?</h2> {/* Subtitle */}
            <img src={process.env.PUBLIC_URL + "/images/partiful.gif"} alt="Partiful homepage redesign" className="project-image" />

            <h2 className='subtitle-content'>Background</h2>
            <p className='content'>
                Facebook Events or Evite? Which event planning platform is the younger generation using? 
            </p>
            <p className='content-middle'>
                Neither, they are instead using ... <a href="https://www.partiful.com" target="_blank" rel="noopener noreferrer" title= "Click to learn more">Partiful</a>. 
            </p>
            <p className='content'>
                Partiful is a new events platform and party RSVP website. It aims to make organizing parties and events more straightforward and enjoyable by offering tools to create, customize, and share event invitations, allowing hosts to manage RSVPS, track guest lists, and communicate with attendees without having to keep someone's number. 
            </p>

            <h2 className='subtitle-content'>The Problem</h2>
            <p className='content'>
                Unfortunately, many of Partiful's users faced usability challenges with its homepage, limiting user engagement. The original design made it difficult for users to view multiple events and lacked features to engage users without upcoming events. 
            </p>
            <div className='problem-image'>
                <img src={process.env.PUBLIC_URL + "/images/problem.png"} alt="Homepage problems" />
                {/* Add CSS to position pointers over this image */}
            </div>

            <h2 className='subtitle-content'>Objective</h2>
            <p className='content'>
                So, the team at Partiful tasked my team to redesign the homepage to improve usability in order to increase user engagement. There were several key points that Partiful wanted us to address:
            </p>
            <p className='content-list'>Customer Description</p>
            <ul className='objective-list'>
                <li>Target Users: Gen Z + Millennials</li>
                <li>Interested in attending events such as Greek events, campus club events, birthdays</li>
            </ul>
            <p className='content-list'>Customer Pain Points</p>
            <ul className='objective-list'>
                <li>Hard to see more than 1-2 Upcoming events</li>
                <li>Hard to h-scroll through the navigation tabs at top, feels unnatural and bulky</li>
            </ul>
            <p className='content-list'>Philosophy</p>
            <ul className='objective-list'>
                <li>Partifulness: make it FUN</li>
                <li>No restrictions in what you can do</li>
            </ul>

            <h2 className='subtitle-content'>User Research</h2>
            <p className='content'>
                With these objectives in mind, our team first conducted user interviews with college students as that was the main target user. The following are some of the key insights we gathered:
            </p>
            <div className='user-feedback'>
                <div className='feedback-item'>
                    <p>"I want to see other features instead of just my events."</p>
                </div>
                <div className='feedback-item'>
                    <p>"I have no events. So why would I use the app?"</p>
                </div>
                <div className='feedback-item'>
                    <p>"It's hard to see all my events at one time."</p>
                </div>
            </div>

            <p className='content'>
                We found that users were frustrated with the lack of visibility of their events and wanted to see more features on the homepage.
            </p>

            <h2 className='subtitle-content'>Process</h2>
            <p className='content'>
                Once we established the main painpoints of Partiful's homepage, our first instinct was to 
            </p>
            <h2 className='subtitle-content'>Impact</h2>
            <p className='content'>
                Post-launch metrics showed an increase in user engagement, with more RSVPs and social interactions. The redesigned homepage significantly improved the user experience, making it easier for users to navigate and interact with the platform's features.
            </p>
            <h2 className='subtitle-content'>Next Steps</h2>
            <p className='content'>
                Future enhancements will focus on refining the 'Trends' and 'Friends' pages to further increase user interaction and content personalization, based on continuous user feedback and evolving design trends.
            </p>
        </div>
    );
}

export default Project1;
