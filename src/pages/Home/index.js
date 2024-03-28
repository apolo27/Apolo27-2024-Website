import React from 'react';
import './Home.css'; 
import astronaut from '../../imgs/astronaut.png'; 
import group_picture from '../../imgs/Home/group-img.png'; // Foto grupal
import { Link } from 'react-router-dom';
import mapa from '../../imgs/Home/mapa.png';
import simulation from '../../imgs/game.jpg';
import team2019 from '../../imgs/Home/2019.jpg';
import team2020 from '../../imgs/Home/2020.jpg';
import team2021 from '../../imgs/Home/2021.jpg';
import team2022 from '../../imgs/Home/2022.jpg';
import team2023 from '../../imgs/Home/2023.jpg';
import team2024 from '../../imgs/Home/2024.jpg';

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
          <Link to='/Simulation'>
            <img src={simulation} alt="Simulation" className='group-picture' />
          </Link>
        </div>

        <div id="item-2">
          <Link to='/Data-Dashboard'>
            <img src={mapa} alt="Mapa" className="map-image" />
          </Link>
        </div>
        
        <div id="item-3">
          <Link to='/Simulation'>
            
          </Link>
        </div>
      </div>

      {/* TIMELINE */}

      <section id="timeline">
    <h1>Get to know us</h1>
    <p class="leader">Take a trip through time and see our journey unfold. Our story and evolution over the years.</p>
    <div class="demo-card-wrapper">
      <div class="demo-card demo-card--step1">
        <div class="head">
          <div class="number-box">
            <span>2019</span>
          </div>
          <h2><span class="small">Beginning</span> Resilence</h2>
        </div>
        <div class="body">
          <p>
          Formed in 2019, our small team made history: 1st university division team from our country at the NASA Rover Challenge!
          </p>
          <img src={team2019} alt="2019" className="team-picture" />
        </div>
      </div>

      <div class="demo-card demo-card--step2">
        <div class="head">
          <div class="number-box">
            <span>2020</span>
          </div>
          <h2><span class="small">Second</span> Robust</h2>
        </div>
        <div class="body">
          <p>
          2020's pandemic brought challenges, but our team persevered. Learned lessons fueled historic "System Safety Award" win!
          </p>
          <img src={team2020} alt="2020" className="team-picture" />
        </div>
      </div>

      <div class="demo-card demo-card--step3">
        <div class="head">
          <div class="number-box">
            <span>2021</span>
          </div>
          <h2><span class="small">Third</span>Bold</h2>
        </div>
        <div class="body">
          <p>
          Rover revamp boosted strength! Team knowledge soared, igniting national STEM passion through our previous experience.
          </p>
          <img src={team2021} alt="2021" className="team-picture" />
        </div>
      </div>

      <div class="demo-card demo-card--step4">
        <div class="head">
          <div class="number-box">
            <span>2022</span>
          </div>
          <h2><span class="small">Fourth</span>Fearless</h2>
        </div>
        <div class="body">
          <p>
          STEM focus expanded in 2022! Launched "STEM Tour" (interactive projects!), crowned "Engagement Award" winners!
          </p>
          <img src={team2022} alt="2022" className="team-picture" />
        </div>
      </div>

      <div class="demo-card demo-card--step5">
        <div class="head">
          <div class="number-box">
            <span>2023</span>
          </div>
          <h2><span class="small">Fifth</span>Robust</h2>
        </div>
        <div class="body">
          <p>
          Dominican DOMINANCE! Major improvements across the board earned "Most Improved" & "Team Spirit" awards - a historic first!
          </p>
          <img src={team2023} alt="2023" className="team-picture" />
        </div>
      </div>

      <div class="demo-card demo-card--step6">
        <div class="head">
          <div class="number-box">
            <span>2024</span>
          </div>
          <h2><span class="small">Sixth</span>Bold</h2>
        </div>
        <div class="body">
          <p>
          Fueled by 2023's challenges, we've leveled up all areas of our team.  Ready to crush ambitious goals & achieve excellence in 2024!
          </p>
          <img src={team2024} alt="2024" className="team-picture" />
        </div>
      </div>
      
    </div>
  </section>

{/* BOTONES ÁREAS */}

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
          <div className="container-areas">
            <div className="card">
              <div className="box">
                <div className="content">
                  <h2>01</h2>
                  <h3>Manufacturing</h3>
                  <p>
                    The manufacturing team is the backbone of our HERC entry. They take the designs from our
                    engineers and transform them into a real, functioning rover.
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="box">
                <div className="content">
                  <h2>02</h2>
                  <h3>Telemetry</h3>
                  <p>
                    Our top-notch telemetry team builds the rover's "nervous system," keeping it in constant communication during competition.
                    They're the silent heroes who ensure smooth operation through real-time data monitoring.
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="box">
                <div className="content">
                  <h2>03</h2>
                  <h3>STEM</h3>
                  <p>
                    Our STEM team brings exciting events and hands-on activities to schools nationwide, sparking
                    a love for science, technology, engineering, and math.
                  </p>
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