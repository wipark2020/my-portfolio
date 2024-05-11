import React from 'react';
import './Project.css'; 

function Project3() {
    return (
        <div className='body' aria-label='redesigning fifaaddict'>
            <h1 className='title' aria-label='FIFAaddict'>FIFAaddict</h1> 
            <h2 className='subtitle' aria-label='What do you use to get information on the video game FIFA?'>What do you use to get information on the video game FIFA?</h2> 
            <img src={process.env.PUBLIC_URL + "/images/homepage.png"} alt="FIFAaddict homepage redesign" className="project-image" aria-label="FIFAaddict homepage redesign" />

            <h2 className='subtitle-content' aria-label='Background'>Background</h2>
            <p className='content'>FIFAaddict is a useful tool for the video game FIFA Online 4 which is a free-to-play multiplayer football (soccer) game. FIFAaddict offers a player database and tools for FIFA Online 4 players to search and compare player stats, calculate transfer tax, and build teams with updated data of the game.</p>
            <p className='content'>Link to Website: <a href="https://en.fifaaddict.com/">FifaAddict Website</a></p>
            <p className='content'>
                FIFAaddict is a popular tool among FIFA Online 4 gamers. It is something I use daily and around 3 million other users as well. However, it suffers from usability and accessibility issues. The cluttered layout, poor visual hierarchy, and inadequate color contrasts hindered user experience. Motivated by personal experience and feedback from fellow players, I undertook the redesign to enhance navigation and overall functionality.
            </p>

            <h2 className='subtitle-content' aria-label='User Research'>User Research</h2>
            <p className='content'>
                I conducted personal research on the website and gathered online feedback from fellow FIFA Online 4 players. The main <b><em>usability</em></b> issues identified were:
            </p>
            <ol className='content-list'>
                <li>The website does not have a clear visual hierarchy as the site has a lot going on visually where it could benefit from emphasizing information, not allowing the user to strategically guide the user's attention.</li>
                <li>It does not have a common scan pattern such as ‘F’ or ‘Z’ pattern where a more structured layout could help in improving the navigation since the interface is so cluttered</li>
                <li>The color and layout also do not help in distinguishing the different sections so utilizing more color could help in organizing the layout</li>
                <li>The site could also utilize some gestalt principles where grouping similar items could be more grouped together such as buttons</li>
                <li>There is too much on the home page that makes it difficult to follow where one feature starts or ends</li>
                <li>The links at the top of the page are unknown of what they are so it is hard to navigate the website</li>
            </ol>
            <img src={process.env.PUBLIC_URL + "/images/WebAIM.png"} alt="WebAIM" className="project-image" aria-label="WebAIM" />
            <p className='content'>
                I was able to test accessibility using WebAIM analysis. The main <b><em>accessibility</em></b> issues identified were:
            </p>
            <ol className='content-list'>
                <li>Color contrast is a big problem where the problem is “very low contrast” which makes it hard to see the features</li>
                <li>Although aria labels are used, alternative text is missing which make it hard for users with screen readers to use the webpage.</li>
                <li>The text size made it difficult to read as well</li>
            </ol>
            <h2 className='subtitle-content' aria-label='Objective'>Objective</h2>
            <p className='content'>
                The main goal was to <b><em>simplify</em></b> the homepage to focus on the search functionality, improve accessibility standards, and ensure a clear visual hierarchy that enhances user flow and engagement which all come from the problems of usability and accessibility that I found.
                Most of the problems come from the cluttering of the homepage where there were too many features present in the home screen to notify new users where to navigate or how to easily use the website.
                My goals:
            </p>
            <ol className='content-list'>
                <li>Highlight the main feature of the website which is the search bar and the results which are the players</li>
                <li>Separate the other features and link those to different home pages via links</li>
                <li>Update the color contrasts and add accessibility features</li>
                <li>Increase text size</li>
            </ol>
            <h2 className='subtitle-content' aria-label='Process'>Process</h2>
            <p className='content'>Knowing what the problems were, I started by sketching out the homepage and the different features that I wanted to include. I changed the design to be more modern where the players will be in cards and there will be an apparent search bar for easy access. The search bar is less cluttered where all the filters are not showing, but if you do want more filters, you can choose to open the filter button to do so.  </p>

            <div style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
                <iframe
                    style={{ border: '1px solid rgba(0, 0, 0, 0.1)', width: '570px', height: '450px' }}
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fy0wRvvlnPlLkbQDMYDcVrX%2FLo-fi%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DUyfi7LRMzbwTwGmj-1"
                    allowFullScreen
                    title="FIFAaddict Lo-fi Prototype"
                />
            </div>

            <p className='content'>Getting feedback from peers regarding my lofi design, I decided it followed good design practices and standards with a modern design, so I put it in a Hi-Fi Prototype.</p>

            <div style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
                <iframe
                    style={{ border: '1px solid rgba(0, 0, 0, 0.1)', width: '570px', height: '450px' }}
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FuG8iB5zlRBObVyyKa0mrcP%2FResponsive-Redesign%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DGP3PZqNcACkPu1T9-1"
                    allowFullScreen
                    title="FIFAaddict Hi-Fi Prototype"
                />
            </div>

            <p className='content'>I then tested the Hi-Fi Prototype with users and got feedback on the design. The feedback was positive where users liked the modern design and the ease of access to the search bar. The search bar was the main feature that users wanted to use and the design made it easy to access. The filters were also easy to access and the design was clean and modern. So, I was able to code it fully.</p>
            <p className='content'>Link to Website: <a href="https://wipark2020.github.io/responsive-redesign/">Responsive Redesign</a></p>
            <p className='content'>Reasonings behind my redesigns: </p>
            <ol className='content-list'>
                <li>I really wanted the focus to be on the search bar. I removed most of the buttons that filter the website and just made it all condensed into an add filters button where it will be established that all the filters on the homepage originally will be accessed through that button. </li>
                <li>Organizing the player cards also was similar. I kept the comparison with the three traits where the option button can change the traits.</li>
                <li>The homepage had two other features other than the search function that I decided to just add to the sandwich menu button area which is the "Latest Comments" feature and the "Tax Calculator".
                Both are important features to players but they are not that important to include on the front page. This is because as you do decrease the screen size of the original website, both the features just disappear from the website.
                So, I decided to do the same (although I did not implement the sandwich button nor the add filters+ button). </li>
            </ol>


            <h2 className='subtitle-content' aria-label='Impact'>Impact</h2>
            <p className='content'>
                The redesign led to a more intuitive and accessible interface. It answers the problems that I had originally which include: establishing a clear hierarchy where it is clear what the title is and what the subsections are.
                It does follow a common scan pattern where it follows the F pattern. Along with this, doing an accessibility analysis through WebAIM, I was able to fix the color contrast and add alternative text to the images.
            </p>

            <p className='content'>Along with this, doing an accessibility analysis through WebAIM, I was able to fix the color contrast and add alternative text to the images. There are <b><em>no errors</em></b>. </p>
       
            <h2 className='subtitle-content' aria-label='Next Steps'>Next Steps</h2>
            <p className='content'>
                Doing this alone, I was able to use this case study to help me build a foundation in learning how to improve accessibility and improve content hierarchy. Being able to go through the process of prototyping to coding a final design is worthwhile.
                I am proud of my final product and <b><em>hope to use</em></b> these skills I learned in future projects.
                In terms of what is next for this case study, future updates will focus on enhancing mobile responsiveness which is an important factor of accessibility as well as making it look more unique rather than a simple website that everyone has these days.
            </p>
        </div>
    );
}

export default Project3;
