import './StemWithUs.css'
import './BigCalendar.css'
import './MobileStemWithUs.css'

import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';

import i18next from "i18next";
import { Calendar, momentLocalizer  } from "react-big-calendar";

import moment from 'moment';
import 'moment/locale/en-gb';
import 'moment/locale/es';


import {Container, Carousel, Card, Button } from "react-bootstrap";
import {Tab, Tabs} from 'react-bootstrap';
import { getEvents } from "../../services/FetchCalendarEvents";
import { getTutorials, getRecentVideos } from "../../services/FetchYTVideos";
import { getBlogs } from "../../services/FetchBlogs";

import TutorialMiniature from '../../components/TutorialMiniature';

import Fastronaut from '../../imgs/StemWithUs/Fastronaut.png';
import arrow from '../../imgs/StemWithUs/arrow.png'

import stem1 from '../../imgs/AboutUs/stem-1.jpg'
import stem2 from '../../imgs/AboutUs/stem-2.jpg'
import stem3 from '../../imgs/AboutUs/stem-3.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpenText, faCalendarDays, faVideo } from '@fortawesome/free-solid-svg-icons'

import {Canvas} from '@react-three/fiber'
import {Environment, useGLTF, Stage, PresentationControls} from '@react-three/drei'



const localizer = momentLocalizer(moment);

function MarsModel(props){
  const {scene} = useGLTF("./NasaMars.glb")
  return <primitive object={scene} {...props} />
}

const StemWithUs = (props) => {
  const [events, setEvents] = useState([])
  const [tutorials, setTutorials] = useState([])
  const [recentVideos, setRecentVideos] = useState([])
  const [blogs, setBlogs] = useState([])
  let t = props.t;

  useEffect(() => {
    if(sessionStorage.getItem("events") === null){
      getEvents(setEvents)
      console.log("api call events");
    } else{
      setEvents(JSON.parse(sessionStorage.getItem('events')))
    }
    
    if(sessionStorage.getItem("tutorials") === null){
      getTutorials(setTutorials)
      console.log("api call tutorials");
    }else{
      setTutorials(JSON.parse(sessionStorage.getItem('tutorials')))
    }
    
    if(sessionStorage.getItem("recentVideos") === null){
      getRecentVideos(setRecentVideos)
      console.log("api call recent videos");
    }else{
      setRecentVideos(JSON.parse(sessionStorage.getItem('recentVideos')))
    }

    if(sessionStorage.getItem("blogs") === null){
      getBlogs(setBlogs)
      console.log("api call blogs");
    }else{
      setBlogs(JSON.parse(sessionStorage.getItem('blogs')))
    }

  }, []);

    return(
      <div>
        <div className='mobile-stem-with-us'>
          <h1 style={{paddingTop: 150, marginBottom: 15, fontWeight: 600}}>{t('STEM-WITH-US')}</h1>
          <Container>
            <Tabs defaultActiveKey="articles" fill={false} justify={true} variant='pills' className='mb-3' transition={true}>
              <Tab eventKey="articles" title={<span><FontAwesomeIcon icon={faEnvelopeOpenText} /> {t('Articles')}</span>} tabClassName='tab'>
                <div className='tab_content'>
                  {
                    blogs
                    .map((blog) => {
                      return(
                        <Card key={blog.title}  style={{marginBottom: 25}}>
                          <Card.Img variant="top" src={blog.imgURL} />
                          <Card.Body>
                            <Card.Title>{new Date(blog.date).toLocaleString(i18next.language, {year: 'numeric', day: 'numeric', month: 'long', hour:'numeric', minute:'numeric'})}</Card.Title>
                            <Card.Title>{blog.title}</Card.Title>
                            <Card.Text> {blog.content[2]}</Card.Text>
                            <Button href={blog.blogURL}>{t('Seguir')}</Button>
                          </Card.Body>
                        </Card>
                        )
                    })
                  }

                </div>
              </Tab>

              <Tab eventKey="calendar" title={<span><FontAwesomeIcon icon={faCalendarDays} /> {t('Calendar')}</span>} tabClassName='tab'>
              <div className='tab_content'> 
                <div className='calendar_container'>
                  <Calendar className="calendario"
                    culture={localStorage.getItem("i18nextLng")}
                    localizer={localizer} 
                    events={events} 
                    startAccessor="start" 
                    endAccessor="end"
                    toolbar={true}
                    views={['month', 'agenda']}
                  />
                <section className="eventos">
                {
                  events.length === 0 ? 
                  <h2>No hay eventos proximos</h2>
                  : events
                  .map((event) => {
                    return(
                      <Card key={event.title}>
                        <Card.Body>
                          <Card.Title>{new Date(event.start).toLocaleString(i18next.language, {day: 'numeric', month: 'long', hour:'numeric', minute:'numeric'})}</Card.Title>
                          <Card.Title>{event.title}</Card.Title>
                          <Card.Text> {event.location}</Card.Text>
                          <Button href={event.htmlLink}>{t('Seguir')}</Button>
                        </Card.Body>
                      </Card>
                      )
                  })
                }
                </section>
                </div>
              </div>
              </Tab>

              <Tab eventKey="videos" title={<span><FontAwesomeIcon icon={faVideo} /> VIDEOS</span>}  tabClassName='tab'>
                <div className='tab_content'>
                  <section className='tutorials'>
                  {
                    (tutorials.length !== 0) ?  
                      <div className='tutorialsLine-top'>
                      <h2>{t('Stem-Tutorials')}</h2>
                      <Link to="https://www.youtube.com/@apolo2730" className='ver-mas'><p>{t('ShowMore')}<img src={arrow} alt='arrow'></img></p></Link>
                    </div>
                    : <></>
                  }
                
                  <div className='tutorialsLine'>
                    {
                      tutorials.length !== 0 ?
                      tutorials.map((video, i) => {
                        return(
                          <TutorialMiniature key={i} img={video.thumbnail} name={video.title}/>
                          )
                      })
                      : <></>
                    } 
                  </div>
                  </section>
          
                  <section className='recent_videos'>
                    <h2 className='tutorialsLine-top'>{t('Recent-Videos')}</h2>
                    <Carousel touch controls={false}>
                      {
                        recentVideos.map((vid, i) => {
                          return(
                            <Carousel.Item key={i} interval={2000}>
                              <div style={{position: 'relative'}}>
                                <a href={vid.url} >
                                  <img className='miniatura' src={vid.thumbnail} alt='miniatura de video'></img>
                                  <h4 className='miniatura_overlay'>{vid.title}</h4>
                                </a>
          
                              </div>
                            </Carousel.Item>
                          )
                        })
                      }
                    </Carousel>
                  </section>
          
          
                  <section className='reels' >
                    <div className='tutorialsLine-top'>
                      <h2>Reels</h2>
                      <a href="https://www.instagram.com/apolo27_rd/reels/" className='ver-mas'>
                        <p>{t('ShowMore')}
                          <img src={arrow} alt='arrow'></img>
                        </p>
                      </a>
                    </div>
                    <div className='reelsLine'>
                        <a className='reel reel1' alt='reel' href='https://www.instagram.com/p/C0mF1IvrihZ/'>
                          <h2 className='reel_title'>Visitas Escolares</h2>
                          <h5 className='reel_subtitle'>Marcando la diferencia</h5>
                        </a>
                        <a className='reel reel2' alt='reel' href='https://www.instagram.com/p/C2aZn8Frew6/'>
                          <h2 className='reel_title'>Actividades con Apolo 27</h2>
                          <h5 className='reel_subtitle'>Sorteos y más</h5>
                        </a>
                        <a className='reel reel3' alt='reel' href='https://www.instagram.com/reel/CzcgK0xLmp6/'>
                          <h2 className='reel_title'>Manufactura y diseño</h2>
                          <h5 className='reel_subtitle'>Demostración de nuestro empeño</h5>
                        </a>
                        {
                          // <InstagramEmbed url="https://www.instagram.com/reel/CzcgK0xLmp6/" />
                          // <InstagramEmbed url="https://www.instagram.com/reel/Cwpoeu5r42a/" />
                          // <InstagramEmbed url="https://www.instagram.com/reel/C0PKP1ALnEL/" />
          
                        }
                    </div>
                  </section>
                </div>
              </Tab>
            </Tabs>

          </Container>
        </div>

        <div className='stem-with-us' style={{textAlign: "center"}}>
          <Container>
            <Canvas
              
              shadows={false}
              spr={[1, 2]}
              camera={{ fov: 45 }}
              style={{height: 500, paddingTop: 100}}  
            >
              <Environment preset='night'/>
              <PresentationControls
                speed={1.5}
                zoom={0.5}
                polar={[-0.1, Math.PI / 4]}
              >
                <Stage shadows={false}>
                  <MarsModel scale={0.15} />
                </Stage>
              </PresentationControls>
            </Canvas>

            {/*
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
            */}



            </Container>

            <h1 style={{paddingTop: 25}}>{t('Blogs')}</h1>
            <section className='blogs'>
              {
                blogs
                .slice(0,3)
                .map((blog) => {
                  return(
                    <Card key={blog.title}  style={{marginBottom: 25}}>
                      <Card.Img variant="top" src={blog.imgURL} />
                      <Card.Body>
                        <Card.Title>{new Date(blog.date).toLocaleString(i18next.language, {year: 'numeric', day: 'numeric', month: 'long', hour:'numeric', minute:'numeric'})}</Card.Title>
                        <Card.Title>{blog.title}</Card.Title>
                        <Card.Text> {blog.content[2]}</Card.Text>
                        <Button href={blog.blogURL}>{t('Seguir')}</Button>
                      </Card.Body>
                    </Card>
                    )
                })
              }

            </section>


            <svg style={{position: 'absolute', left: 0, top: 0, zIndex:-1}} preserveAspectRatio='none' viewBox='0 0 1398 4103' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M0 0L18.1933 210.565C23.6961 274.253 26.4475 306.097 42.9652 330.85C46.4838 336.123 50.404 341.07 54.7342 345.699C75.0613 367.434 105.498 377.405 166.371 397.348C210.077 411.667 257.37 427.22 296.853 440.345C329.151 451.081 345.3 456.449 359.423 470.698C362.423 473.724 365.218 477.011 367.722 480.458C379.514 496.689 383.18 519.484 390.511 565.076C403.897 648.324 446.824 720 554.5 720C630.094 720 718.604 721.151 798.305 722.552C896.139 724.271 945.057 725.131 978.628 752.583C985.606 758.289 992.059 764.856 997.642 771.933C1024.5 805.982 1024.5 855.252 1024.5 953.792V1430.73C1024.5 1549.43 1024.5 1608.78 1056.78 1649.06C1063.52 1657.48 1071.17 1665.13 1079.59 1671.88C1119.88 1704.15 1179.22 1704.15 1297.92 1704.15H1398L1388.56 4102.84H0V0Z'
                fill='#000'
              />
            </svg>
            <hr></hr>
    
            <h1 style={{paddingTop: 25}}>{t('Eventos_Proximos')}</h1>
            <div className='calendar_container'>
                <Calendar className="calendario"
                  culture={localStorage.getItem("i18nextLng")}
                  localizer={localizer} 
                  events={events} 
                  startAccessor="start" 
                  endAccessor="end"
                  toolbar={true}
                  views={['month', 'agenda']}
                />
              <section className="eventos" style={{marginTop: 75}}>
              {
                events.length === 0 ? 
                <h1>No hay eventos proximos</h1>
                : events.map((event) => {
                  return(
                    <Card key={event.title}>
                      <Card.Body>
                        <Card.Title>{new Date(event.start).toLocaleString(i18next.language, {day: 'numeric', month: 'long', hour:'numeric', minute:'numeric'})}</Card.Title>
                        <Card.Title>{event.title}</Card.Title>
                        <Card.Text> {event.location}</Card.Text>
                        <Button href={event.htmlLink}>{t('Seguir')}</Button>
                      </Card.Body>
                    </Card>
                    )
                })
              }
              </section>
            </div>
            

            <Container>
            <section className='tutorials'>
              {
                (tutorials.length !== 0) ?  
                  <div className='tutorialsLine-top'>
                  <h2>{t('Stem-Tutorials')}</h2>
                  <Link to="https://www.youtube.com/@apolo2730" className='ver-mas'><p>{t('ShowMore')}<img src={arrow} alt='arrow'></img></p></Link>
                </div>
                : <></>
              }
            
              <div className='tutorialsLine'>
                {
                  tutorials.length !== 0 ?
                  tutorials.map((video, i) => {
                    return(
                      <TutorialMiniature key={i} img={video.thumbnail} name={video.title}/>
                      )
                  })
                  : <></>
                } 
              </div>
            </section>
    
            <section className='recent_videos'>
              <h2 className='tutorialsLine-top'>{t('Recent-Videos')}</h2>
              <Carousel touch controls={false}>
                {
                  recentVideos.map((vid, i) => {
                    return(
                      <Carousel.Item key={i} interval={2000}>
                        <div style={{position: 'relative'}}>
                          <a href={vid.url} >
                            <img className='miniatura' src={vid.thumbnail} alt='miniatura de video'></img>
                            <h4 className='miniatura_overlay'>{vid.title}</h4>
                          </a>
    
                        </div>
                      </Carousel.Item>
                    )
                  })
                }
              </Carousel>
            </section>
    
    
            <section className='reels' >
              <div className='tutorialsLine-top'>
                <h2>Reels</h2>
                <a href="https://www.instagram.com/apolo27_rd/reels/" className='ver-mas'>
                  <p>{t('ShowMore')}
                    <img src={arrow} alt='arrow'></img>
                  </p>
                </a>
              </div>
              <div className='reelsLine'>
                  <a className='reel reel1' alt='reel' href='https://www.instagram.com/p/C0mF1IvrihZ/'>
                    <h2 className='reel_title'>Visitas Escolares</h2>
                    <h5 className='reel_subtitle'>Marcando la diferencia</h5>
                  </a>
                  <a className='reel reel2' alt='reel' href='https://www.instagram.com/p/C2aZn8Frew6/'>
                    <h2 className='reel_title'>Actividades con Apolo 27</h2>
                    <h5 className='reel_subtitle'>Sorteos y más</h5>
                  </a>
                  <a className='reel reel3' alt='reel' href='https://www.instagram.com/reel/CzcgK0xLmp6/'>
                    <h2 className='reel_title'>Manufactura y diseño</h2>
                    <h5 className='reel_subtitle'>Demostración de nuestro empeño</h5>
                  </a>
                  {
                    // <InstagramEmbed url="https://www.instagram.com/reel/CzcgK0xLmp6/" />
                    // <InstagramEmbed url="https://www.instagram.com/reel/Cwpoeu5r42a/" />
                    // <InstagramEmbed url="https://www.instagram.com/reel/C0PKP1ALnEL/" />
    
                  }
              </div>
            </section>
    
            <section className='contact-us' style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginTop: 150, paddingBottom: 125}}>
                <div className="glowing_stars">
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                </div>
              <img src={Fastronaut} className='astronautStemIZQ' alt='Female Astronaut'></img>
              <div style={{marginTop: 100}}>
                <h2>{t('Plan-a-meeting')}</h2>
                <Button href='/Contact-Us' style={{width: '275px', height: '75px', fontSize: '36px', fontWeight: 700}}>{t('Contactenos')}!</Button>
              </div>
              <img src={Fastronaut} className='astronautStemDER' alt='Female Astronaut'></img>
            </section>
          </Container>
        </div>
      </div>
    )
}

export default StemWithUs;