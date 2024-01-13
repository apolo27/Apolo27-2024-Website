import './AboutUs.css';
import { useState } from 'react';
import { useTheme, useMediaQuery } from '@mui/material';
import {Container, Card, Carousel, Button} from 'react-bootstrap';

import blankPic from '../../imgs/blank-profile.png'
import first from '../../imgs/carousel/first.jpg'
import second from '../../imgs/carousel/second.jpeg'
import third from '../../imgs/carousel/third.jpg'
import fourth from '../../imgs/carousel/fourth.jpg'

import photochards from '../../imgs/AboutUs/photocards.png'

import stem1 from '../../imgs/AboutUs/stem-1.jpg'
import stem2 from '../../imgs/AboutUs/stem-2.jpg'
import stem3 from '../../imgs/AboutUs/stem-3.jpg'

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
      img: 'https://apolo27.com/img/about-us/team-members/ezequiel.png',
      nombre: "Ezequiel Díaz",
      titulo: "Mechanical Engineering",
      equipo: ["Team Advisor"]
    },
    {
      img: 'https://apolo27.com/img/about-us/team-members/ingrid.png',
      nombre: "miembro 2",
      titulo: "Mechatronics Engineering",
      equipo: ["Team Leader", "Woman"]
    },
    {
      img: 'https://apolo27.com/img/about-us/team-members/miguela.png',
      nombre: "miembro 3",
      titulo: "Mechatronics Engineering",
      equipo: ["Manufacturing"]
    },
    {
      img: 'https://apolo27.com/img/about-us/team-members/rosanna.png',
      nombre: "Rosanna Bautista",
      titulo: "Software Engineering",
      equipo: ["Telemetry", "Woman"]
    },
    {
      img: 'https://apolo27.com/img/about-us/team-members/faisy.png',
      nombre: "Faisy Alcántara",
      titulo: "Biomedical Engineering",
      equipo: ["STEM", "Woman"]
    },
    {
      img: 'https://apolo27.com/img/about-us/team-members/franmil.png',
      nombre: "Franmil Estrella",
      titulo: "Mechatronics Engineering",
      equipo: ["3D Printing"]
    },
    {
      img: 'https://apolo27.com/img/about-us/team-members/raymond.png',
      nombre: "Raymond Ruiz",
      titulo: "Mechatronics Engineering",
      equipo: ["Mentor"]
    },
    {
      img: 'https://apolo27.com/img/about-us/team-members/guadalupe.png',
      nombre: "Guadalupe Bonilla",
      titulo: "Mechanical Engineering",
      equipo: ["Manufacturing", "Woman"]
    },
    {
      img: blankPic,
      nombre: "Vantroi Morillo",
      titulo: "Electronics & Comunications Engineering",
      equipo: ["Telemetry"]
    },
    {
      img: blankPic,
      nombre: "Luis Adames",
      titulo: "Software Engineering",
      equipo: ["Telemetry"]
    },
    {
      img: blankPic,
      nombre: "Manuel Guerrero",
      titulo: "Telemetry Assistant",
      equipo: ["Telemetry"]
    },
    {
      img: blankPic,
      nombre: "miembro 9",
      titulo: "titulo 9",
      equipo: ["Manufacturing"]
    },
    {
      img: blankPic,
      nombre: "miembro 10",
      titulo: "titulo 10",
      equipo: ["Manufacturing"]
    }
  ]

  const items = [
    {
      title: "2019",
      cardTitle: "MAKING HISTORY",
      cardSubtitle: "REPRESENTING DR IN NASA HERC",
      cardDetailedText:"In 2019, we started with just a few members, and it was a challenging time for us. But we were determined to represent our country for the first time ever in the NASA Human Exploration Rover Challenge, and we did just that.",
      media: {
        type: "IMAGE",
        source: {
          url: "https://apolo27.com/img/about-us/2019.jpg"
        }
      }    
    },
    {
      title: "2020",
      cardTitle: "LEARNING FROM CHALLENGES",
      cardSubtitle: "FIRST AWARD AMID GLOBAL PANDEMIC",
      cardDetailedText:"In 2020, despite the challenges posed by the pandemic, we persevered and learned valuable lessons that helped us grow, which led to win our first award: \"System Safety Award\".",
      media: {
        type: "IMAGE",
        source: {
          url: "https://apolo27.com/img/about-us/2020.jpg"
        }
      }
    },
    {
      title: "2021",
      cardTitle: "PUSHING OURSELVES TO NEW HEIGHTS",
      cardSubtitle: "ADAPTATION",
      cardDetailedText:"In 2021, we continued to promote STEM in our country. Also, we focused in making the Rover's design even better. We also successfully raised awareness for STEM in our country.",
      media: {
        type: "IMAGE",
        source: {
          url: "https://apolo27.com/img/about-us/2021.jpg"
        }
      }
    },
    {
      title: "2022",
      cardTitle: "INSPIRING THE NEXT GENERATION",
      cardSutitle: "WINNING STEM ENGAGEMENT AWARD",
      cardDetailedText:"In 2022, we focused on even more aspects of STEM. This led us to create the STEM Tour, an event where we showcased interactive STEM projects. This year, we won \"STEM Engagement Award\".",
      media: {
        type: "IMAGE",
        source: {
          url: "https://apolo27.com/img/about-us/2022.jpg"
        }
      }
    },
    {
      title: "2023",
      cardTitle: "PUSHING THE BOUNDARIES",
      cardSubtitle: "PRESENT",
      cardDetailedText:"In 2023, we're still in the process, but our focus remains on making our rover the best one yet. We also believe that STEM can change the world, that's why we are committed to push it even more in our country.",
      media: {
        type: "IMAGE",
        source: {
          url: "https://apolo27.com/img/about-us/2023.jpg"
        }
      }
    },
    {
      title: "2024",
      cardTitle: "Dunkirk",
      cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
      media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/image.jpg"
        }
      }
    },
  ];

  return(
    <div style={{textAlign: "center"}}>
      <Carousel>
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
            <Button className={`selectionButton ${equipoSeleccionado === "Manufacturing" ? "selectedTeam" : ""}`} onClick={() => handleTeamSelection("Manufacturing")}>Manufacturing</Button>
            <Button className={`selectionButton ${equipoSeleccionado === "Telemetry" ? "selectedTeam" : ""}`} onClick={() => handleTeamSelection("Telemetry")}>Telemetry</Button>
            <Button className={`selectionButton ${equipoSeleccionado === "Mentor" ? "selectedTeam" : ""}`} onClick={() => handleTeamSelection("Mentor")}>Mentors</Button>
            <Button className={`selectionButton ${equipoSeleccionado === "Woman" ? "selectedTeam" : ""}`} onClick={() => handleTeamSelection("Woman")}>Women in STEM</Button>
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
                <p className="entry-summary">{t('WomenInSTEMBody')}</p>
              </article>
              <article className="entry">
                <img className="entry-img" src={stem3} alt="The profile view of three majestic brown horses" />
                <h1 className="entry-headline primary-headline">{t('WeBelieveInDominicanYouth')}</h1>
                <time className="entry-date meta">{t('March 29, 2023')}</time>
                <span className="entry-byline meta">{t('School Visits')}</span>
                <p className="entry-summary">{t('School VisitsBody')}</p>
              </article>
              <section className="trending">
                <article className="trending-entry">
                  <h1 className="trending-entry-headline primary-headline">{t('School VisitsFooter')}</h1>
                </article>
                <article className="trending-entry">
                  <h1 className="trending-entry-headline primary-headline"><br/>{t('School VisitsFooter2')}</h1>
                </article>
              </section>              
            </main>  
        </section>

      </Container>
    </div>
  )
}

export default AboutUs;