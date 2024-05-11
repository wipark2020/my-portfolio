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
            <p className= 'disclaimer'>
                <b>Note:</b> To start, we were given the ability to meet with the clients once a week to get feedback on the project to lead us in the right direction. 
            </p>
            <p className= 'disclaimer'>
                <b>Note:</b> Since I was working with a team, the work I did is colored in <span style={{ color: 'blue' }}>blue</span>.
            </p>
            <p className='content'>
                Once we established the main painpoints of Partiful's homepage, we decided to get inspiration at other apps that were social and one-dimensional where one-dimensional means that the app is targeting a specific niche like restaurants or running which is similar to events. 
            </p>

            <p className='content'>
                Drawing inspiration from popular apps like Beli for its categorical navigation, Netflix for its engaging content display, and Strava for its community features, we sketched various redesigns to incorporate these elements effectively.
            </p>

            <p className='content'>
                We decided to make a <span style={{ color: 'blue' }}>carousel wheel</span> to view the events as we thought it was a cool interaction to see multiple events where you can see the next and the event before it. 
                We used the Beli app as inspiration for the different categories that you can view the events in. This was to make the app more engaging and fun to use as there is content to view regarding what parties are trending or what themes to do.
                It also contributed to the Partifulness that Partiful wanted to have in their app.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', padding: '10px'}}>
                <iframe
                  style={{ border: '1px solid rgba(0, 0, 0, 0.1)', width: '570px', height: '450px' }}
                  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FZ8QRNMO1ghxuZLzQT6Ah7s%2FPartiful%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D41-1374%26viewport%3D345%252C928%252C0.05%26t%3D3NB3n3E9nnTqRzCL-1%26scaling%3Dcontain%26starting-point-node-id%3D41%253A1374%26show-proto-sidebar%3D1%26mode%3Ddesign"
                  allowFullScreen
                />
            </div>

            <p className='content'>
            We iterated based on weekly feedback sessions with Partiful, focusing on simplifying the interface and enhancing accessibility. The following issues were brought up:
            </p>
            <ul className='objective-list'>
                <li>Carosel feature in the homescreen was just another version of an h-scrolling feature</li>
                <li>They challenged us to think more outside the box in displaying events and what content to display in the Trends and Friends tabs</li>
            </ul>

            <p className='content'>
            Thus, in investigating the problem, we decided to go with a different design that would meet the client's needs, which was <span style={{ color: 'blue' }}>through the "Apple Wallet" style</span> of viewing the credit cards.
            </p>
            {/* image of apple wallet and description of why it is good on the side of it  */}
            <p className='content'>
            The final design adopted an "Apple Wallet" style for event cards, providing a clean, easily navigable interface. To keep the app different in interactions, we kept the Netflix style of scrolling on both the "Trends" and "Friends" pages.
            <span style={{ color: 'blue' }}>The "Events" tab also included other features such as a "Create Event" button and easier ways to observe Past events as well. There are also different homepages to consider the different scenarios of a person having an event, no event, or having an invite.</span>
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', padding: '10px'}}>
                <iframe
                  style={{ border: '1px solid rgba(0, 0, 0, 0.1)', width: '570px', height: '450px' }}
                  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FZ8QRNMO1ghxuZLzQT6Ah7s%2FPartiful%3Fpage-id%3D23%253A50%26type%3Ddesign%26node-id%3D189-3966%26viewport%3D-2239%252C249%252C0.6%26t%3DHDiGS1K7rwi0hczr-1%26scaling%3Dscale-down%26starting-point-node-id%3D189%253A3966%26show-proto-sidebar%3D1%26mode%3Ddesign"
                  allowFullScreen
                />
              </div>

            <h2 className='subtitle-content'>Impact</h2>
            <p className='content'>
                Meeting with the team at Partiful, there was success in the final design that we made. 
                There are no metrics to show an increase in user engagement, with more RSVPs and social interactions. 
                But, from the Partiful team's point of view, the redesigned homepage <b>significantly improved</b> the user experience, making it easier for users to navigate and interact with the platform's features.
                This includes the "Apple Wallet" style of viewing the events which enables the user to see all the events at once and meeting all the objectives that Partiful wanted us to meet.
                In particular, Partifulness.
            </p>
            <h2 className='subtitle-content'>Next Steps & What I learned</h2>
            <p className='content'>
                Future updates will focus on enhancing personalization features, integrating social sharing capabilities, and optimizing the platform for mobile devices. 
                Continuous user feedback will guide these improvements to ensure the platform remains user-centric and competitive in the event planning market.
            </p>
            <p className='content'>
                Redesigning the Partiful homepage was a <b>challenging yet rewarding experience</b> that took the course of a month. 
                This was the first time in my experience working with a client to redesign a product.
                I learned the importance of taking in feedback from the clients and users to create a product that meets their needs.
                I also learned to work with a team collaboratively and taking in each other suggestions to create a final product. 
                Overall, my team and I are <b>proud</b> of the final design we created and hope that it will help Partiful attract more users and improve their platform.
            </p>
        </div>
    );
}

export default Project1;
