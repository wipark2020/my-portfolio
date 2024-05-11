import React from 'react';
import './Project.css'; 

function Project2() {
    return (
        <div className='body'>
            <h1 className='title'>Biol</h1>
            <h2 className='subtitle'>Simplifying Access to Influential Biographies</h2>
            <img src={process.env.PUBLIC_URL + "/images/biol.png"} alt="Interface design for biography favorites" className="project-image" aria-label="Interface design for biography favorites" />

            <h2 className='subtitle-content'>Introduction</h2>
            <p className='content'>
                In the digital age, access to information is key, yet the ability to organize and retrieve data efficiently is often overlooked. This project was initiated to address the challenge of managing biographical information effectively to not only simplifies interaction but also enhance user engagement.
            </p>

            <h2 className='subtitle-content'>Challenge and Context</h2>
            <p className='content'>
                The primary challenge was the <strong><em>lack of an intuitive system</em></strong> for users to explore and favorite biographies of notable figures. Existing platforms were either too cumbersome or not sufficiently flexible, leading to a fragmented user experience. 
                The most notable is <a href="https://www.biography.com/" target="_blank" rel="noopener noreferrer"> biography.com</a>
            </p>

            <div className='project-content-image-2'>
                <img src={process.env.PUBLIC_URL + "/images/biography_homepage.png"} alt="Biography homepage redesign" aria-label="Biography homepage redesign" />
                <div>
                    <p className='content-2'>In viewing this website, there is <strong><em>no way</em></strong> to easily access a person nor is there a way to search for someone easily. </p>
                </div>
            </div>

            <h2 className='subtitle-content'>Objective</h2>
            <p className='content'>
                Thus, my goal was to develop a clear and engaging interface that allows users to filter, sort, and save biographical data <strong><em>with ease</em></strong>. I aimed to create a solution that encourages exploration while also providing the functionality to manage favorites efficiently.
            </p>

            <h2 className='subtitle-content'>Research</h2>
            <p className='content'>
                To get a better understanding of how other organizations design their products, I observed strengths and weaknesses, market gaps and opportunities, and any threat of the competitors in the market.
            </p>
            <p className='content'>To do this, I identifed <strong><em>three different competitor’s websites</em></strong> with a favoriting function, particularly how they organize information that is pertinent to the user and how they utilize aggregators where an aggregator is a list that keeps track of items. An example of this can be shopping carts or favorites lists. </p>
            <p className='content'>I have selected the websites:  
                <a href="https://www.realtor.com/realestateandhomes-search/Providence_RI" target="_blank" rel="noopener noreferrer"> realtor.com</a>, 
                <a href="https://www.allrecipes.com/search?q=smoothies" target="_blank" rel="noopener noreferrer"> allrecipes.com</a>, and 
                <a href="https://bigfuture.collegeboard.org/scholarship-search" target="_blank" rel="noopener noreferrer"> bigfuture.collegeboard.org/scholarship-search</a>. 
                I have identified 6 factors related to the favoriting functions in each website.
            </p>
            <table className='table'>
            <thead>
                <tr>
                <th>Feature</th>
                <th>realtor</th>
                <th>allrecipes</th>
                <th>bigfuture</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Favoriting Button with changing of color when clicked</td>
                <td>Yes</td>
                <td>Yes</td>
                <td>Yes</td>
                </tr>
                <tr>
                <td>Notifications if favorited or unfavorited</td>
                <td>No</td>
                <td>Yes</td>
                <td>Yes</td>
                </tr>
                <tr>
                <td>Aggregate Number of Favorites Displayed</td>
                <td>No</td>
                <td>No</td>
                <td>Yes</td>
                </tr>
                <tr>
                <td>Filter options near the Search Bar</td>
                <td>Yes</td>
                <td>No</td>
                <td>Yes</td>
                </tr>
                <tr>
                <td>Image of item occupies the entire space</td>
                <td>Yes</td>
                <td>No</td>
                <td>Yes</td>
                </tr>
                <tr>
                <td>Button options are different based on type</td>
                <td>Yes</td>
                <td>No</td>
                <td>Yes</td>
                </tr>
                <tr>
                <td>Hierarchy of important information where important numbers and facts are included on the card</td>
                <td>No</td>
                <td>No</td>
                <td>No</td>
                </tr>
            </tbody>
            </table>

            <p className='content'><b><em>Note: </em></b>Next to each factor discussed is a number which corresponds to the one on the image.</p>
            <img src="./images/realtor.jpg" alt="Realtor Website" aria-label='Realtor Website' className="project-image"/>
            <p className='content'>The website 
                <a href="https://www.realtor.com/realestateandhomes-search/Providence_RI" target="_blank" rel="noopener noreferrer" > <b>realtor.com </b></a>
                is a website where you can search for living spaces (houses, apartments) for sale or rent. The main page that I used to start my analysis was the page once I searched for ‘Providence, RI’. 
            </p>
            <ol className='content-list'>
                <li>
                    The layout of each item card is consistent, all with high-quality images, descriptions, and prices appearing in the same place.
                </li>
                <li>
                    The hierarchy of the website also helped in distinguishing the important information for the user, making the price and details pop out to the user.
                </li>
                <li>
                    When the favorite button is clicked, the color of the heart changes to red, which helps in color contrast to identify that the button was clicked. The difference in the types of buttons also helps in determining which buttons are what.
                </li>
                <li>
                    The one factor that I wish they included would be adding text to the header near the heart to state that it is the 'Favorites' section.
                </li>
            </ol>
            <img src="./images/recipe.jpg" alt="Recipe Website" aria-label='Recipe Website' className="project-image"/>
            <p className='content'>The website 
            <a href="https://www.allrecipes.com/search?q=smoothies" target="_blank" rel="noopener noreferrer" className=''> <b>allrecipes.com</b> </a>
            is a website where you can search for recipes to cook. The main page that I used to start my analysis was the page once I searched for ‘Smoothies’. 
            </p>
            <ol className='content-list'>
                <li>
                The website did not have an option to select filters based on what was searched. 
                </li>
                <li>
                The item cards did not all have the favoriting button, so there was no consistency in the results where you would get a smoothie recipe but also an article about smoothies. A filtering option would be great to ensure that the appropriate results would be given. 
                </li>
                <li>
                The layout of the website can also be improved where once searched for ‘Smoothies’, there are two search bars both with the same functionality. The font-size and color contrast were both readable. 
                </li>
                <li>
                However, there was a linear layout in presenting the header, search results, and item cards. There is no real-time filtering, so if you want to observe all the recipes, you have to type in a specific recipe that you want. 
                </li>
                <li>
                The notifications were a problem. When a user favorites a recipe, an entire pop-up that occupies the entire page shows up, so that the user would need to exit out of the pop-up everytime. This is a major problem as it makes the interaction with the website slow. If a user wants to favorite multiple recipes at a time, they would need to go through this interaction everytime. 
                </li>
            </ol>
            <img src="./images/scholarship.jpg" alt="Scholarship Website" aria-label='Scholarship Website' className="project-image"/>
            <p className='content'>The website 
            <a href="https://bigfuture.collegeboard.org/scholarship-search" target="_blank" rel="noopener noreferrer"> <b>bigfuture.collegeboard.org/scholarship-search</b> </a>
            is a website where you can search for scholarships.
            </p>
            <ol className='content-list'>
                <li>
                The banner “Find the right scholarships for you” messes with the layout of the website where the search and filter options are separate from each other, interrupting the flow for the user to search for more options for results. The banner’s vibrant color also attracts the user to seek that it is important, but there is no functionality with it, which can be fixed. 
                </li>
                <li>
                The favoriting button changes color which provides good color contrast to easily identify that the button was clicked. 
                </li>
                <li>
                The favoriting aggregation showed the number of favorited scholarships which helps the user quickly identify how many scholarships they saved
                </li>
                <li>
                The notification system helps in accessibility and does not take up the entire screen which helps in utilization of the website. 
                </li>
            </ol>
            <p className='content' >Based on the above descriptions of the factors and designs that were most/least successful, the following list are features that I want to incorporate:</p>
            <ol className='content-list'>
                <li>
                Favoriting button with changing of color when clicked
                </li>
                <li>
                Notifications if favorited or unfavorited
                </li>
                <li>
                Aggregate Number of Favorites Displayed
                </li>
                <li>
                Filter options near the Search Bar
                </li>
                <li>
                Image of item occupies the entire space
                </li>
                <li>
                Button options are different based on type
                </li>
                <li>
                Hierarchy of important information where important numbers and facts are included on the card
                </li>
            </ol>
            <h2 className='subtitle-content'>Design and Development Process</h2>
            <p className='content'>
                Through this research, I developed a website that would incorporate what I thought would work the best. 
            </p>
            
            <div className='project-content-image-2'>
                <img src={process.env.PUBLIC_URL + "/images/mockup.png"} alt="Biography homepage redesign" aria-label="Biography homepage redesign" />
                <div>
                    <p className='content-2'>Through this sketch, I am using an H-scroll to filter through the people faster. This is so that it is easier to identify the celebrities. I wanted to add a favoriting part which will belong to each card and dynamically be added and removed if clicked on the favoriting button. I also added a notification for accessibility. </p>
                </div>
            </div>

            <p className='content'>
                The feedback I got on the lo-fi sketch was positive and I went on to create a hi-fi prototype which can be accessed <a href="https://biography-app.vercel.app/" target="_blank" rel="noopener noreferrer">here</a>.
            </p>


            <img src={process.env.PUBLIC_URL + "/images/biol.png"} alt="Biography homepage redesign" className='project-image' aria-label="Biography homepage redesign"/>
       

            <p className='content'>
                The interface includes:
            </p>
            <ol className='content-list'>
                    <li>Dynamic filtering by Gender and Occupation.</li>
                    <li>Sorting mechanisms for Name and Age.</li>
                    <li>An aggregation section labeled "Favorite Biographies" that updates in real-time.</li>
            </ol>

            <p className='content'>
                These features were designed to cater to the specific needs of users looking to navigate large sets of biographical information effectively.
            </p>

            <h2 className='subtitle-content'>Impact and Future Directions</h2>
            <p className='content'>
                The application has demonstrated significant improvements in user interaction metrics and satisfaction. It is easier to find biographies of people and to favorite them if needed. 
                Future updates will focus on expanding filtering options, integrating predictive analytics to suggest biographies based on user preferences, and enhancing mobile responsiveness.
            </p>

            <h2 className='subtitle-content'>What I learned</h2>
            <p className='content'>
                Doing this alone, this case study showed me that there is a lot of different options in terms of aggregation which makes me want to explore other functionalities in code that accomplish the same things.
                I have learned about disecting other work and utilizing that to the best of my ability.
                I believe this is important because of the ever changing that is design.
                I am proud of what I learned through this assignment and hope to utilize it in my future work. 
            </p>
        </div>
    );
}

export default Project2;
