import React from 'react';
import './Home.css'; // Import your CSS file
import astronaut from '../../imgs/astronaut.png'; // Import the astronaut image
import group_picture from '../../imgs/group-picture.webp' // Foto grupal
import { Link } from 'react-router-dom';
import mapa from '../../imgs/Home/mapa.png'

function Home() {
  return (
    <div className="grid">
      <div id="item-0">
        {}
        <h4>
          4 TIMES CATEGORY WINNERS AT HERC
        </h4>
        <h1>
          The First Dominican Republic<br />
          University Division Winners at<br />
          NASA’s Human Exploration Rover<br />
          Challenge
        </h1>

        {}
        <img src={astronaut} alt="Astronaut" className="astronaut-image" />
        &nbsp;</div>
      <div id="item-1">
        <Link to='/About-Us'>
        <button id='data-button'> 
          Conócenos
        </button>
        </Link>
        <img src={group_picture} alt="Apolo 27 official picture" className='group-picture'></img>
      </div>
      <div id="item-2">
        <Link to='/Data-Dashboard'>
        <button id='data-button'> 
          Data dashboard
        </button>
        <img src={mapa} alt="Mapa" className="map-image" />
        </Link>
        </div>
      <div id="item-3">&nbsp;</div>
    </div>
  );
}

export default Home;