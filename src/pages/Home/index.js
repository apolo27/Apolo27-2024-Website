import React from 'react';
import './Home.css'; 
import './slider-styles.css'; 
import astronaut from '../../imgs/astronaut.png'; 
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import mapa from '../../imgs/Home/mapa.png';
import simulation from '../../imgs/game.jpg';
import team2019 from '../../imgs/Home/2019.jpg';
import team2020 from '../../imgs/Home/2020.jpg';
import team2021 from '../../imgs/Home/2021.jpg';
import team2022 from '../../imgs/Home/2022.jpg';
import team2023 from '../../imgs/Home/2023.jpg';
import team2024 from '../../imgs/Home/2024.jpg';


// TEAM MEMBERS PICTURES

import Ezequiel from '../../imgs/AboutUs/TeamMembers/Ezequiel.jpg'
import Angello from '../../imgs/AboutUs/TeamMembers/Angello.jpg'
import Anne from '../../imgs/AboutUs/TeamMembers/Anne.jpg'
import Avril from '../../imgs/AboutUs/TeamMembers/Avril.jpg'
import Camila from '../../imgs/AboutUs/TeamMembers/Camila.jpg'
import Colmenares from '../../imgs/AboutUs/TeamMembers/Colmenares.jpg'
import Coral from '../../imgs/AboutUs/TeamMembers/Coral.jpg'
import Eridania from '../../imgs/AboutUs/TeamMembers/Eridania.jpg'
import Erika from '../../imgs/AboutUs/TeamMembers/Erika.jpg'
import Estarlyn from '../../imgs/AboutUs/TeamMembers/Estarlyn.jpg'
import Faisy from '../../imgs/AboutUs/TeamMembers/Faisy.jpg'
import Franmil from '../../imgs/AboutUs/TeamMembers/Franmil.jpg'
import Hanlet from '../../imgs/AboutUs/TeamMembers/Hanlet.jpg'
import Humberto from '../../imgs/AboutUs/TeamMembers/Humberto.jpg'
import Ingrid from '../../imgs/AboutUs/TeamMembers/Ingrid.jpg'
import Iselle from '../../imgs/AboutUs/TeamMembers/Iselle.jpg'
import Ismael from '../../imgs/AboutUs/TeamMembers/Ismael.jpg'
import Jacob from '../../imgs/AboutUs/TeamMembers/Jacob.jpg'
import Jorge from '../../imgs/AboutUs/TeamMembers/Jorge.jpg'
import Luis from '../../imgs/AboutUs/TeamMembers/Luis.jpg'
import Manuel from '../../imgs/AboutUs/TeamMembers/Manuel.jpg'
import Marko from '../../imgs/AboutUs/TeamMembers/Marko.jpg'
import Miguel from '../../imgs/AboutUs/TeamMembers/Miguel.jpg'
import Randy from '../../imgs/AboutUs/TeamMembers/Randy.jpg'
import Raymond from '../../imgs/AboutUs/TeamMembers/Raymond.jpg'
import Rosanna from '../../imgs/AboutUs/TeamMembers/Rosanna.jpg'
import Vantroi from '../../imgs/AboutUs/TeamMembers/Vantroi.jpg'


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
                  <li id='areas-button'><HashLink smooth to="Manufacturing#Manufacturing-page">Read More</HashLink></li>
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
                  <li id='areas-button'><HashLink smooth to="Telemetry#Telemetry-page">Read More</HashLink></li>
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
                  <li id='areas-button'><HashLink smooth to="STEM#STEM-page">Read More</HashLink></li>
                </div>
              </div>
            </div>
          </div>
      </section>

      <section id='Members'>
          <div class="containerSlider">
              <div id='divTitulo'>
                <h1 id='comienzoTitulo'>
                  Our members
                </h1>
              </div>  
              <div class="faders">
                <div class="left"></div>
                <div class="right"></div>
              </div>
          <div class="itemsSlider">
            <div class="entry1">
              <p class="name">Ezequiel Díaz</p>
              <img src={Ezequiel} alt="Ezequiel" className="imgSlider" />
              <p class="quote">Team Advisor<br></br>Mechanics Engineering</p>
            </div>
            <div class="entry">
              <p class="name">Ezequiel Díaz</p>
              <img src={Ezequiel} alt="Ezequiel" className="imgSlider" />
              <p class="quote">Team Advisor<br></br>Mechanics Engineering</p>
            </div>
            <div class="entry">
              <p class="name">Franmil Estrella</p>
              <img src={Franmil} alt="Franmil" className="imgSlider" />
              <p class="quote">Safety Officer<br></br>Mechatronics Engineering</p>
            </div>
            <div class="entry">
              <p class="name">Coral Rodríguez</p>
              <img src={Coral} alt="Coral" className="imgSlider" />
              <p class="quote">Stem Assistant<br></br>Science Engineering</p>
            </div>
            <div class="entry">
              <p class="name">Camila Tejada</p>
              <img src={Camila} alt="Camila" className="imgSlider" />
              <p class="quote">Funding Assistant<br></br>International Business</p>
            </div>
            <div class="entry">
              <p class="name">Angello Ortiz</p>
              <img src={Angello} alt="Angello" className="imgSlider" />
              <p class="quote">Stem Assistant<br></br>Mechanics Engineering</p>
            </div>
            <div class="entry">
              <p class="name">Jacob Ruíz</p>
              <img src={Jacob} alt="Jacob" className="imgSlider" />
              <p class="quote">Special Mentor<br></br>Mechanics Engineering</p>
            </div>
            <div class="entry">
              <p class="name">José Hernández</p>
              <img src={Humberto} alt="Jose" className="imgSlider" />
              <p class="quote">Manufacturing Assistant<br></br>Mechanics Engineering</p>
            </div>
            <div class="entry">
              <p class="name">Rosanna Bautista</p>
              <img src={Rosanna} alt="Rosanna" className="imgSlider" />
              <p class="quote">Telemetry Manager<br></br>Software Engineering<br></br></p>
            </div>
            <div class="entry">
              <p class="name">Iselle Suero</p>
              <img src={Iselle} alt="Iselle" className="imgSlider" />
              <p class="quote">Stem Assistant<br></br>Medicine</p>
            </div>
            <div class="entry">
              <p class="name">Miguel Arredondo</p>
              <img src={Miguel} alt="Miguel" className="imgSlider" />
              <p class="quote">Manufacturing Manager<br></br>Mechanics Engineering</p>
            </div>
            <div class="entry">
              <p class="name">Ismael Martinez</p>
              <img src={Ismael} alt="Ismael" className="imgSlider" />
              <p class="quote">Social Media Manager<br></br>Software Engineering</p>
            </div>
            <div class="entry">
              <p class="name">Vantroi Morillo</p>
              <img src={Vantroi} alt="Vantroi" className="imgSlider" />
              <p class="quote">Telemetry Manager<br></br>Electronics Engineering</p>
            </div>
            <div class="entry">
              <p class="name">Marko De los Santos</p>
              <img src={Marko} alt="Marko" className="imgSlider" />
              <p class="quote">Manufacturing Assistant<br></br>Mechanics Engineering</p>
            </div>
            <div class="entry">
              <p class="name">Ingrid López</p>
              <img src={Ingrid} alt="Ingrid" className="imgSlider" />
              <p class="quote">Team Leader<br></br>Mechatronics Engineering</p>
            </div>
            <div class="entry">
              <p class="name">Faisy Alcántara</p>
              <img src={Faisy} alt="Faisy" className="imgSlider" />
              <p class="quote">Stem Manager<br></br>Biomedical Engineering</p>
            </div>
            <div class="entry">
              <p class="name">Estarlyn Marrero</p>
              <img src={Estarlyn} alt="Estarlyn" className="imgSlider" />
              <p class="quote">Manufacturing Assistant<br></br>Mechatronics Engineering</p>
            </div>
            <div class="entry">
              <p class="name">Jorge Colmenares</p>
              <img src={Colmenares} alt="Randy" className="imgSlider" />
              <p class="quote">Special Mentor<br></br>Mechanics Engineering</p>
            </div>
            <div class="entry">
              <p class="name">Luis Adames</p>
              <img src={Luis} alt="Luis" className="imgSlider" />
              <p class="quote">Telemetry Assistant<br></br>Software Engineering</p>
            </div>
            <div class="entry">
              <p class="name">Avril Neder</p>
              <img src={Avril} alt="Avril" className="imgSlider" />
              <p class="quote">Social Media Assistant<br></br>Aeroespacial Engineering</p>
            </div>
            <div class="entry">
              <p class="name">Eridania Pérez</p>
              <img src={Eridania} alt="Eridana" className="imgSlider" />
              <p class="quote">Manufacturing Assistant<br></br>Industrial Engineering</p>
            </div>
            <div class="entry">
              <p class="name">Raymond Ruíz</p>
              <img src={Raymond} alt="Raymond" className="imgSlider" />
              <p class="quote">Special Mentor<br></br>Mechatronics Engineering</p>
            </div>
            <div class="entry">
              <p class="name">Jorge Martínez</p>
              <img src={Jorge} alt="Randy" className="imgSlider" />
              <p class="quote">Project Manager<br></br>Industrial Engineering</p>
            </div>
            <div class="entry">
              <p class="name">Erika Portorreal</p>
              <img src={Erika} alt="Erika" className="imgSlider" />
              <p class="quote">Funding Manager<br></br>Industrial Engineering</p>
            </div>
            <div class="entry">
              <p class="name">Hanlet Leonardo</p>
              <img src={Hanlet} alt="Hanlet" className="imgSlider" />
              <p class="quote">Stem Assistant<br></br>Energy Engineering</p>
            </div>
            <div class="entry">
              <p class="name">Manuel Guerrero</p>
              <img src={Manuel} alt="Manuel" className="imgSlider" />
              <p class="quote">Telemetry Assistant<br></br>Systems Engineering</p>
            </div>
            <div class="entry">
              <p class="name">Randy Capellán</p>
              <img src={Randy} alt="Randy" className="imgSlider" />
              <p class="quote">Manufacturing Assistant<br></br>Industrial Engineering</p>
            </div>
            <div class="entry">
              <p class="name">Anne Joaquín</p>
              <img src={Anne} alt="Anne" className="imgSlider" />
              <p class="quote">Team Leader Assistant<br></br>Mechatronics Engineering</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;