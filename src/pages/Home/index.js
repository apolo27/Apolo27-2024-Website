import React from 'react';
import './Home.css'; 
import astronaut from '../../imgs/astronaut.png'; 
import group_picture from '../../imgs/Home/group-img.png'; // Foto grupal
import { Link } from 'react-router-dom';
import mapa from '../../imgs/Home/mapa.png';
import simulation from '../../imgs/game.jpg';


function Home() {
  return (
    <>
      <div className="grid">
        <div id="item-0">
          <h4>
            4 TIMES CATEGORY WINNERS AT HERC
          </h4>
          <h1>
            The First Dominican Republic<br />
            University Division Winners at<br />
            NASA’s Human Exploration Rover<br />
            Challenge
          </h1>
          <Link to='/'>
            <img src={astronaut} alt="Astronaut" className="astronaut-image" />
          </Link>
        </div>

        <div id="item-1" className='item-1'>
          <Link to='/About-Us'>
            <img src={group_picture} alt="Apolo 27 official picture" className='group-picture' />
          </Link>
        </div>

        <div id="item-2">
          <Link to='/Data-Dashboard'>
            <img src={mapa} alt="Mapa" className="map-image" />
          </Link>
        </div>
        
        <div id="item-3">
          <Link to='/Simulation'>
            <img src={simulation} alt="Simulación" className="group-picture" />
          </Link>
        </div>
      </div>
      
      <section id='pre-game'>
          <div id='pre-game-div'>
            <div id="container">
            Apolo 27 is 
            <div id="flip">
              <div><div>Telemetry</div></div>
              <div><div>Manufacturing</div></div>
              <div><div>STEM</div></div>
            </div>          
          </div>   
        </div> 
      </section>

      <section id='areas'>
            <div class="container-areas">
        <div class="card">
          <div class="box">
            <div class="content">
              <h2>01</h2>
              <h3>Manufacturing</h3>
              <p>
              The manufacturing team is the backbone of our HERC entry. They take the designs from our
              engineers and transform them into a real, functioning rover.</p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="box">
            <div class="content">
              <h2>02</h2>
              <h3>Telemetry</h3>
              <p>
              Our top-notch telemetry team builds the rover's "nervous system," keeping it in constant communication during competition.
              They're the silent heroes who ensure smooth operation through real-time data monitoring.</p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="box">
            <div class="content">
              <h2>03</h2>
              <h3>STEM</h3>
              <p>Our STEM team brings exciting events and hands-on activities to schools nationwide, sparking
                 a love for science, technology, engineering, and math.</p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
      </section>

    </>
  );
}

export default Home;


