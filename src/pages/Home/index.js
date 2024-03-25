import React from 'react';
import './Home.css'; 
import astronaut from '../../imgs/astronaut.png'; 
import group_picture from '../../imgs/Home/group-img.png'; // Foto grupal
import { Link } from 'react-router-dom';
import mapa from '../../imgs/Home/mapa.png';
import simulation from '../../imgs/game.jpg';
import { timeline } from '../../pages/Home/timeline.js';
import team2024 from '../../imgs/Home/group-img.png'

function Home() {
  return (
    <>

    {/* PRIMEROS WIDGETS */}

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
      
    {/* TEXTO ANIMADO */}

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

{/* TIMELINE */}

    <section id="timeline-1" class="timeline-container">
      <div class="timeline-header">
        <h2 class="timeline-header__title">Our story</h2>
        <h3 class="timeline-header__subtitle">Get to know us since the beginning</h3>
      </div>
      <div class="timeline">
        <div class="timeline-item" data-text="APOLO 27">
          <div class="timeline__content">
            <img class="timeline__img" src="https://i0.wp.com/nuevodiario-assets.s3.us-east-2.amazonaws.com/wp-content/uploads/2019/04/Estudiantes-de-INTEC.jpeg?fit=1024%2C768&ssl=1" />
            <h2 class="timeline__content-title">2019</h2>
            <p class="timeline__content-desc">In 2019, we started with just a few members, and it was a challenging time for us. But we were determined to represent our country for the first time ever in the NASA Human Exploration Rover Challenge, and we did just that.</p>
          </div>
        </div>
        <div class="timeline-item" data-text="APOLO 27">
          <div class="timeline__content">
            <img class="timeline__img" src="https://i0.wp.com/ensegundos.do/wp-content/uploads/2020/08/Ministra-jueventud-y-estudiantes.jpg?fit=1200%2C800&ssl=1" />
            <h2 class="timeline__content-title">2020</h2>
            <p class="timeline__content-desc">In 2020, despite the challenges posed by the pandemic, we persevered and learned valuable lessons that helped us grow, which led to win our first award: "System Safety Award".</p>
          </div>
        </div>
        <div class="timeline-item" data-text="APOLO 27">
          <div class="timeline__content">
            <img class="timeline__img" src="https://pbs.twimg.com/media/EyiPSveWYAEHLWy?format=jpg&name=medium" />
            <h2 class="timeline__content-title">2021</h2>
            <p class="timeline__content-desc">In 2021, we continued to promote STEM in our country. Also, we focused in making the Rover's design even better. We also successfully raised awareness for STEM in our country.</p>
          </div>
        </div>
        <div class="timeline-item" data-text="APOLO 27">
          <div class="timeline__content">
            <img class="timeline__img" src="https://listindiario.com/files/article_main_microformat/uploads/2022/05/12/643011cad8e42.jpeg" />
            <h2 class="timeline__content-title">2022</h2>
            <p class="timeline__content-desc">In 2022, we focused on even more aspects of STEM. This led us to create the STEM Tour, an event where we showcased interactive STEM projects. This year, we won "STEM Engagement Award".</p>
          </div>
        </div>
        <div class="timeline-item" data-text="APOLO 27">
          <div class="timeline__content">
            <img class="timeline__img" src="https://cdn.filestackcontent.com/no_metadata/resize=width:700,fit:max/OsWMci9gTwabQetTx4Hw" />
            <h2 class="timeline__content-title">2023</h2>
            <p class="timeline__content-desc">In 2023, the team kept growing and learning. This year, we won two category awards for the first time, "Most Improved Award" and "Team Spirit Award".</p>
          </div>
        </div>
        <div class="timeline-item" data-text="APOLO 27">
          <div class="timeline__content">
            <img class="timeline__img" src={team2024} />
            <h2 class="timeline__content-title">2024</h2>
            <p class="timeline__content-desc">This year we are focused on improving everything even more. Expanding through all the country and create bigger impact.</p>
          </div>
        </div>
        <div class="timeline-item" data-text="APOLO 27">

        </div>
      </div>
    </section>
    </>
  );
}

export default Home;
timeline()


