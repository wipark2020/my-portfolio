import React from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import './About.css';

function About() {
  return (
      <section id="about" className="about-section" aria-label='about-section'>
        <img src={process.env.PUBLIC_URL + "/images/me.JPG"} alt="Image Description 1" className="me top-left img-tape" aria-label="Image of me"/>
        <img src={process.env.PUBLIC_URL + "/images/skyline.JPG"} className="skyline bottom-left img-tape" aria-label="Image of skyline"/>
        <img src={process.env.PUBLIC_URL + "/images/me2.JPG"} className="me2 top-right img-tape" aria-label="Another image of me"/>
        <img src={process.env.PUBLIC_URL + "/images/pool.JPG"} className="pool bottom-right img-tape" aria-label="Image of pool"/>
        <img src={process.env.PUBLIC_URL + "/images/donut.JPG"} className="donut middle-right img-tape" aria-label="Image of donut"/>
        <div className="me-style caption-me" aria-label="Caption for image of me"> 
          <h2>this is me</h2>
        </div>
        <div className="pool-style caption-pool" aria-label="Caption for image of pool"> 
          <h2>pool game strong</h2>
        </div>
        <div className="donut-style caption-donut" aria-label="Caption for image of donut"> 
          <h2>best donuts</h2>
        </div>
        <div className="me2-style caption-me2" aria-label="Caption for another image of me"> 
          <h2>this is me again</h2>
        </div>
        <div className="skyline-style caption-skyline" aria-label="Caption for image of skyline"> 
          <h2>this is boston</h2>
        </div>
        <div className="about-content">
          <div className="text-container">
            <h1>Hello!</h1>
            <p1>I'm William and I'm a digital artist, captivated by building <span style={{ color: 'blue' }}>fun</span> and <span style={{ color: 'blue' }}>amazing</span> experiences. Welcome to my space, built with heart in San Diego and Providence.</p1>
          </div>
        </div>
        <div className="scroll-indicator">
          <a href="#projects" aria-label="Scroll to Projects section">
            <ArrowDownwardIcon style={{ color: 'black', fontSize: 48 }} />
          </a>
        </div> 
        
      </section>
  );
}

export default About;
