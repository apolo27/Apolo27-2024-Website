import React from 'react';
import './Home.css'; // Import your CSS file
import astronaut from '../../imgs/astronaut.png'; // Import the astronaut image

function Home() {
  return (
    <div className="grid">
      <div id="item-0">
        {/* Text content */}
        <h4>
          4 TIMES CATEGORY WINNERS AT HERC
        </h4>
        <h1>
          The First Dominican Republic<br />
          University Division Winners at<br />
          NASA’s Human Exploration Rover<br />
          Challenge
        </h1>

        {/* Image element with absolute positioning */}
        <img src={astronaut} alt="Astronaut" className="astronaut-image" />
      </div>
      <div id="item-1">&nbsp;</div>
      <div id="item-2">&nbsp;</div>
      <div id="item-3">&nbsp;</div>
    </div>
  );
}

export default Home;