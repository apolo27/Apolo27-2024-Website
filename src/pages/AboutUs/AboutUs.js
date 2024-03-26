import './AboutUs.css';
import { useState } from 'react';
import { useTheme, useMediaQuery } from '@mui/material';
import {Container, Card, Carousel, Button} from 'react-bootstrap';

import first from '../../imgs/group-picture.webp'
import second from '../../imgs/carousel/second.jpeg'
import third from '../../imgs/carousel/third.jpg'
import fourth from '../../imgs/carousel/fourth.jpg'

import photochards from '../../imgs/AboutUs/photocards.png'

import stem1 from '../../imgs/AboutUs/stem-1.jpg'
import stem2 from '../../imgs/AboutUs/stem-2.jpg'
import stem3 from '../../imgs/AboutUs/stem-3.jpg'

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
import Rossana from '../../imgs/AboutUs/TeamMembers/Rossana.jpg'
import Vantroi from '../../imgs/AboutUs/TeamMembers/Vantroi.jpg'

import {Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab/';

const AboutUs = (props) =>{
  let t = props.t;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const [equipoSeleccionado, setEquipoSeleccionado] = useState("All");
  
  function CheckIfAll(){
    return equipoSeleccionado === "All" ? members : members.filter((member) => member.equipo[0] === equipoSeleccionado || member.equipo[1] === equipoSeleccionado )
  }

  function handleTeamSelection(team){

    setEquipoSeleccionado(team);
  }

  const members = [
    {
      img: Colmenares,
      nombre: "Colmenares",
      titulo: "titulo 10",
      equipo: ["Mentor"]
    },
    {
      img: Raymond,
      nombre: "Raymond Ruiz",
      titulo: "Mechatronics Engineering",
      equipo: ["Mentor"]
    },
    {
      img: Jacob,
      nombre: "Jacob",
      titulo: "Mechatronics Engineering",
      equipo: ["Mentor"]
    },
    {
      img: Ezequiel,
      nombre: "Ezequiel Díaz",
      titulo: "Mechanical Engineering",
      equipo: ["Team Advisor", "Team Leader Team"]
    },
    {
      img: Ingrid,
      nombre: "Ingrid Lopez",
      titulo: "Mechatronics Engineering",
      equipo: ["Team Leader", "Team Leader Team", "Woman"]
    },
    {
      img: Anne,
      nombre: "Anne Marie",
      titulo: "Mechatronics Engineering",
      equipo: ["Team Leader Assistant", "Team Leader Team", "Woman"]
    },
    {
      img: Miguel,
      nombre: "Miguel Arredondo",
      titulo: "Mechatronics Engineering",
      equipo: ["Manufacturing Team"]
    },
    {
      img: Marko,
      nombre: "Marko De Los Santos",
      titulo: "Mechanical Engineering",
      equipo: ["Manufacturing Team"]
    },
    {
      img: Randy,
      nombre: "Randy Capellán",
      titulo: "titulo 10",
      equipo: ["Manufacturing Team"]
    },
    {
      img: Eridania,
      nombre: "Eridania Pérez",
      titulo: "titulo 10",
      equipo: ["Manufacturing Team", "Woman"]
    },
    {
      img: Estarlyn,
      nombre: "Estarlyn Marrero",
      titulo: "titulo 10",
      equipo: ["Manufacturing Team"]
    },
    {
      img: Humberto,
      nombre: "José Humberto",
      titulo: "Mechatronics Engineering",
      equipo: ["Manufacturing Team"]
    },
    {
      img: Franmil,
      nombre: "Franmil Estrella",
      titulo: "Mechatronics Engineering",
      equipo: ["3D Printing"]
    },
    {
      img: Rossana,
      nombre: "Rossana Bautista",
      titulo: "Software Engineering",
      equipo: ["Telemetry Team", "Woman"]
    },
    {
      img: Vantroi,
      nombre: "Vantroi Morillo",
      titulo: "Electronics & Comunications Engineering",
      equipo: ["Telemetry Team"]
    },
    {
      img: Luis,
      nombre: "Luis Adames",
      titulo: "Software Engineering",
      equipo: ["Telemetry Team"]
    },
    {
      img: Manuel,
      nombre: "Manuel Guerrero",
      titulo: "Systems Engineering",
      equipo: ["Telemetry Team"]
    },
    {
      img: Faisy,
      nombre: "Faisy Alcántara",
      titulo: "Biomedical Engineering",
      equipo: ["STEM Team", "Woman"]
    },
    {
      img: Angello,
      nombre: "Angello Lora Rodriguez",
      titulo: "Mechanical Engineering",
      equipo: ["STEM Team"]
    },
    {
      img: Coral,
      nombre: "Coral Rodríguez",
      titulo: "titulo 10",
      equipo: ["STEM Team", "Woman"]
    },
    {
      img: Hanlet,
      nombre: "Hanlet Leonardo",
      titulo: "Energy Engineer",
      equipo: ["STEM Team"]
    },

    {
      img: Iselle,
      nombre: "Iselle",
      titulo: "Doctor in Medicine",
      equipo: ["STEM Team", "Woman"]
    },
    {
      img: Ismael,
      nombre: "Ismael Martínez",
      titulo: "Software Engineering",
      equipo: ["Social Media Team"]
    },
    {
      img: Avril,
      nombre: "Avril Leder",
      titulo: "Aerospacial Engineering",
      equipo: ["Social Media Team", "Woman"]
    },
    {
      img: Jorge,
      nombre: "Jorge Martínez",
      titulo: "Industrial Design",
      equipo: ["Funding & Project Management"]
    },
    {
      img: Camila,
      nombre: "Camila",
      titulo: "International Businessess",
      equipo: ["Funding & Project Management", "Woman"]
    },
    {
      img: Erika,
      nombre: "Erika Portoreal",
      titulo: "Industrial Engineering",
      equipo: ["Funding & Project Management", "Woman"]
    },
  ]


  return(
    <div style={{textAlign: "center"}}>
      <Carousel className='about_us_carousel'>
        <Carousel.Item>
        <img className='d-block w-100' src={second} alt='second'></img>
          <Carousel.Caption>
            <h1>Our Story</h1>
            <p>GET TO KNOW ALL ABOUT US</p>
            <Button>Learn More</Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className='d-block w-100' src={first} alt='first'></img>
          <Carousel.Caption>
            <h1>Apolo 27</h1>
            <p>Meet Members of our team</p>
            <Button>Our Members</Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <img className='d-block w-100' src={third} alt='third'></img>
          <Carousel.Caption>
            <h1>2 Times Category Winners</h1>
            <p>DISCOVER THE AWARDS WE HAVE WON</p>
            <Button>Our Awards</Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <img className='d-block w-100' src={fourth} alt='fourth'></img>
          <Carousel.Caption>
            <h1>STEM Is For Everyone</h1>
            <p>MAKING STEM ACCESIBLE FOR EVERYONE IS ONE OF OUR PRINCIPAL OBJECTIVES</p>
            <Button>Apolo27 + STEM</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      
      <Container>
        <div className="blockquote-wrapper">
          <div className="blockquote">
            <h1>
              {t('NelsonMandela')}
            </h1>
            <h4>&mdash;Nelson Mandela<br/><em></em></h4>
          </div>
        </div>
        <div className="polaroid-img">
          <img src={photochards} className="image-polaroid" alt='pictures ofapolo 27 team members'/>
        </div>


        <h1 style={{marginTop: "25px"}} id='OurStory'>{t('OurStory')}</h1>
        <h3>{t('GetToKnowUs2')}</h3>

        <Timeline position={matches?'alternate':'right'} style={{marginTop: "50px"}}>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <div className="demo-card demo-card--step1">
                  <div className="head">
                    <div className="number-box">
                      <span>2019</span>
                    </div>
                    <h2><span className="small">Making History</span>Representing DR in NASA HERC</h2>
                  </div>
                  <div className="body">
                    <p>{t('Equipo-2019')}</p>
                    <img className='equipoPorAnho' src="https://apolo27.com/img/about-us/2019.jpg" alt="2019" />
                  </div>
                </div>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
            <div className="demo-card demo-card--step2">
                <div className="head">
                  <div className="number-box">
                    <span>2020</span>
                  </div>
                  <h2><span className="small">Learning from Challenges</span>First Award Amid Global Pandemic</h2>
                </div>
                <div className="body">
                  <p>{t('Equipo-2020')}</p>
                  <img className='equipoPorAnho' src="https://apolo27.com/img/about-us/2020.jpg" alt="2020" />
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
            <div className="demo-card demo-card--step3">
                <div className="head">
                  <div className="number-box">
                    <span>2021</span>
                  </div>
                  <h2><span className="small">Pushing Ourselves to New Heights</span> Adaptation</h2>
                </div>
                <div className="body">
                  <p>{t('Equipo-2021')}</p>
                  <img className='equipoPorAnho' src="https://apolo27.com/img/about-us/2021.jpg" alt="2021" />
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
            <div className="demo-card demo-card--step4">
                <div className="head">
                  <div className="number-box">
                    <span>2022</span>
                  </div>
                  <h2><span className="small">Inspiring the Next Generation</span> Winning STEM Engagement Award</h2>
                </div>
                <div className="body">
                  <p>{t('Equipo-2022')}</p>
                  <img className='equipoPorAnho' src="https://apolo27.com/img/about-us/2022.jpg" alt="2022" />
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>
          
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="demo-card demo-card--step5">
                <div className="head">
                  <div className="number-box">
                    <span>2023</span>
                  </div>
                  <h2><span className="small">Pushing the Boundaries</span>PRESENT</h2>
                </div>
                <div className="body">
                  <p>{t('Equipo-2023')}</p>
                  <img className='equipoPorAnho' src="https://apolo27.com/img/about-us/2023.jpg" alt="2023" />
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="demo-card demo-card--step5">
                <div className="head">
                  <div className="number-box">
                    <span>2024</span>
                  </div>
                  <h2><span className="small">Pushing the Boundaries</span>PRESENT</h2>
                </div>
                <div className="body">
                  <p>{t('Equipo-2024')}</p>
                  <img className='equipoPorAnho' src="https://apolo27.com/img/about-us/2023.jpg" alt="2023" />
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>

        </Timeline>

        <section style={{marginTop: "50px"}} id='TeamMembers'>
          <h1>Our Members</h1>
          <div className='buttons'>
            <Button className={`selectionButton ${equipoSeleccionado === "All" ? "selectedTeam" : ""}`} onClick={() => handleTeamSelection("All")}>All</Button>
            <Button className={`selectionButton ${equipoSeleccionado === "Mentors" ? "selectedTeam" : ""}`} onClick={() => handleTeamSelection("Mentor")}>Mentors</Button>
            <Button className={`selectionButton ${equipoSeleccionado === "Team Leaders" ? "selectedTeam" : ""}`} onClick={() => handleTeamSelection("Team Leader Team")}>Team Leaders</Button>
            <Button className={`selectionButton ${equipoSeleccionado === "Manufacturing" ? "selectedTeam" : ""}`} onClick={() => handleTeamSelection("Manufacturing Team")}>Manufacturing</Button>
            <Button className={`selectionButton ${equipoSeleccionado === "STEM" ? "selectedTeam" : ""}`} onClick={() => handleTeamSelection("STEM Team")}>STEM</Button>
            <Button className={`selectionButton ${equipoSeleccionado === "Telemetry" ? "selectedTeam" : ""}`} onClick={() => handleTeamSelection("Telemetry Team")}>Telemetry</Button>
            <Button className={`selectionButton ${equipoSeleccionado === "Woman" ? "selectedTeam" : ""}`} onClick={() => handleTeamSelection("Woman")}>Women in STEM</Button>
            <Button className={`selectionButton ${equipoSeleccionado === "FundingPM" ? "selectedTeam" : ""}`} onClick={() => handleTeamSelection("Funding & Project Management")}>Funding</Button>
            <Button className={`selectionButton ${equipoSeleccionado === "Social Media" ? "selectedTeam" : ""}`} onClick={() => handleTeamSelection("Social Media Team")}>Social Media</Button>
          </div>

          <div className='members'>
            {
              CheckIfAll()
              .map((member) =>{
                return(
                  <Card key={member.nombre} style={{ width: '18rem', margin: '15px'}}>
                  <Card.Img variant="top" src={member.img} />
                  <Card.Body>
                    <Card.Title className="mb-3">{member.nombre}</Card.Title>
                    <Card.Subtitle>{member.titulo}</Card.Subtitle>
                    <Card.Title>{member.equipo[0]}</Card.Title>
                  </Card.Body>
                </Card>
                )
              })
            }
          </div>
        </section>

        <section id="awards-section">
          <h1>Our Awards</h1>
          <div className="ag-format-container">
              <div className="ag-courses_box">
                <div className="ag-courses_item">
                  <a className="ag-courses-item_link" href="/About-Us">
                    <div className="ag-courses-item_bg"></div>
            
                    <div className="ag-courses-item_title">
                      System Safety Award
                    </div>
            
                    <div className="ag-courses-item_date-box">
                      <p>{t('System-Safety-Award-Description')}</p>
                      <span className="ag-courses-item_date">
                        2020
                      </span>
                    </div>
                  </a>
                </div>
            
                <div className="ag-courses_item">
                  <a className="ag-courses-item_link" href="/About-Us">
                    <div className="ag-courses-item_bg"></div>
            
                    <div className="ag-courses-item_title">
                      STEM Engagement Award
                    </div>
            
                    <div className="ag-courses-item_date-box">
                      {t('Stem-Engament-Award-Description')}
                      <span className="ag-courses-item_date">
                        2022
                      </span>
                    </div>
                  </a>
                </div>
            
                <div className="ag-courses_item">
                  <a className="ag-courses-item_link" href="/About-Us">
                    <div className="ag-courses-item_bg"></div>
            
                    <div className="ag-courses-item_title">
                      Coming Soon
                    </div>
            
                    <div className="ag-courses-item_date-box">
                      {t('Stem-Engament-Award-Description')}
                      <span className="ag-courses-item_date">
                        2023
                      </span>
                    </div>
                  </a>
                </div>
              </div>
          </div>
        </section>

        <section id="stem">
                  <div className="title">
                    <h1>Apolo 27 + STEM</h1>
                  </div>
                  <header className="header">
                    <h1 className="header-title masthead">{t('StemForAll')}</h1>
                  </header>
                  <main className="main">
                    <article className="entry entry-lede">
                      <img className="entry-img" src={stem1} alt="stem-img1"/>
                      <div className="entry-content">
                        <h1 className="entry-headline primary-headline">{t('ImportanceOfStem')}</h1>
                        <time className="entry-date meta">{t('ImportanceOfStemSub')}</time>
                        <p className="entry-summary">{t('ImportanceOfStemBody')}</p>
                      </div>
                    </article>
                    <article className="entry">
                      <img className="entry-img" src={stem2} alt="The profile view of three majestic brown horses" />
                      <h1 className="entry-headline primary-headline">{t('GirlsAreTheFuture')}</h1>
                      <time className="entry-date meta">{t('March 8, 2023')}</time>
                      <span className="entry-byline meta">{t('WomenInSTEM')}</span>
                    </article>
                    <article className="entry">
                      <img className="entry-img" src={stem3} alt="The profile view of three majestic brown horses" />
                      <h1 className="entry-headline primary-headline">{t('WeBelieveInDominicanYouth')}</h1>
                      <time className="entry-date meta">{t('March 29, 2023')}</time>
                      <span className="entry-byline meta">{t('School Visits')}</span>
                    </article>
                    <section className="trending">
                      <article className="trending-entry">
                        <h2>{t('School VisitsFooter')}</h2>
                      </article>
                      <br></br>
                      <article className="trending-entry">
                        <h2>{t('School VisitsFooter2')}</h2>
                      </article>
                    </section>              
                  </main>  
              </section>

      </Container>
    </div>
  )
}

export default AboutUs;