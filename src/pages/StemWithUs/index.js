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
import STEM from '../../imgs/StemWithUs/STEM.png'

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
  const [modalState, setModalState] = useState(false)
  const [events, setEvents] = useState([])
  const [eventToShow, setEventToShow] = useState({})
  const [tutorials, setTutorials] = useState([])
  const [recentVideos, setRecentVideos] = useState([])
  const [blogs, setBlogs] = useState([])
  let t = props.t;

  useEffect(() => {
    if(sessionStorage.getItem("events") === null){
      getEvents(setEvents)
      // console.log("api call events");
    } else{
      setEvents(JSON.parse(sessionStorage.getItem('events')))
    }
    
    if(sessionStorage.getItem("tutorials") === null){
      getTutorials(setTutorials)
      // console.log("api call tutorials");
    }else{
      setTutorials(JSON.parse(sessionStorage.getItem('tutorials')))
    }
    
    if(sessionStorage.getItem("recentVideos") === null){
      getRecentVideos(setRecentVideos)
      // console.log("api call recent videos");
    }else{
      setRecentVideos(JSON.parse(sessionStorage.getItem('recentVideos')))
    }

    if(sessionStorage.getItem("blogs") === null){
      getBlogs(setBlogs)
      // console.log("api call blogs");
    }else{
      setBlogs(JSON.parse(sessionStorage.getItem('blogs')))
    }

  }, []);

  
  const handleSelectedEvent = (event) => {
    setEventToShow(event)
    setModalState(true)
 }

 const Modal = () => {
  return (
     <div className={`modal-${modalState === true ? 'show' : 'hide'}`}>
      <Card>
          <Card.Title style={{paddingTop: 25}}>{new Date(eventToShow.start).toLocaleString(i18next.language, {day: 'numeric', month: 'long', hour:'numeric', minute:'numeric'})}</Card.Title>
          <Card.Title>{eventToShow.title}</Card.Title>
        <Card.Body>
          <Card.Text style={{maxWidth: 300, paddingTop: 50}}> {eventToShow.location}</Card.Text>
          <Button style={{width: '75%'}} href={eventToShow.htmlLink}>{t('Seguir')}</Button>
        </Card.Body>
      </Card>
     </div>
  )
}
 const MobileModal = () => {
  return (
     <div className={`mobile-modal-${modalState === true ? 'show' : 'hide'}`}>
      <Card style={{position: 'relative'}}>
        <Button style={{
          position: 'absolute', 
          right: 0, 
          width: 40,
          height: 40, 
          backgroundColor: '#000', 
          border: 'solid 2px #fff', 
          borderRadius: '100%'
          }} onClick={()=> setModalState(false)}>X</Button>
          <Card.Title style={{paddingTop: 50}}>{new Date(eventToShow.start).toLocaleString(i18next.language, {day: 'numeric', month: 'long', hour:'numeric', minute:'numeric'})}</Card.Title>
          <Card.Title>{eventToShow.title}</Card.Title>
        <Card.Body style={{height: 200}}>
          <Card.Text style={{maxWidth: 300, marginTop: 50}}> {eventToShow.location}</Card.Text>
          <Button style={{width: '75%'}} href={eventToShow.htmlLink}>{t('Seguir')}</Button>
        </Card.Body>
      </Card>
     </div>
  )
}

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
                      selected={eventToShow}
                      onSelectSlot={(e) => handleSelectedEvent(e)}
                      onSelectEvent={(e) => handleSelectedEvent(e)}
      
                    />
                    {eventToShow && <MobileModal />}
                
                  </div>
                </div>
              </Tab>

              <Tab eventKey="videos" title={<span><FontAwesomeIcon icon={faVideo} /> VIDEOS</span>}  tabClassName='tab'>
                <div className='tab_content'>
                  <section className='tutorials'>
                  {
                    (tutorials.length !== 0) ?  
                      <div className='tutorialsLine-top'>
                      <h2>Stem-Tutorials</h2>
                      <Link to="https://www.youtube.com/@apolo2730" className='ver-mas'><p>Show More<img src={arrow} alt='arrow'></img></p></Link>
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
                                  <h4 className='miniatura_overlay'>•{vid.title}</h4>
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
                        <p>Show More
                          <img src={arrow} alt='arrow'></img>
                        </p>
                      </a>
                    </div>
                    <div className='reelsLine'>
                        <a className='reel reel1' alt='reel' href='https://www.instagram.com/p/C0mF1IvrihZ/'>
                          <h2 className='reel_title'>School Visits</h2>
                          <h5 className='reel_subtitle'>Marking difference</h5>
                        </a>
                        <a className='reel reel2' alt='reel' href='https://www.instagram.com/p/C2aZn8Frew6/'>
                          <h2 className='reel_title'>Activities with Apolo 27</h2>
                          <h5 className='reel_subtitle'>Fun events for kids</h5>
                        </a>
                        <a className='reel reel3' alt='reel' href='https://www.instagram.com/reel/CzcgK0xLmp6/'>
                          <h2 className='reel_title'>Manufacturing and design</h2>
                          <h5 className='reel_subtitle'>Showcasing the process of building our Rover</h5>
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
          <div>
            <Container style={{position: 'relative'}}>
            {/*<div className='stem-with-us-container'></div>*/}
              <section style={{display: 'flex', position: 'relative'}}>
                <div style={{position: 'absolute'}}>
                  <img style={{position: 'relative'}} src={STEM} alt='STEM'></img>
                  <h2 style={{position: 'absolute', right: 0, fontWeight: 700}}>{t('WithUS')}</h2>
                </div>
                <Canvas
                  shadows={false}
                  spr={[1, 2]}
                  camera={{ fov: 45 }}
                  style={{position: 'relative', height: 500, paddingTop: 100}}  
                >
                  <Environment preset='night'/>
                  <PresentationControls
                    speed={1.5}
                    zoom={0.5}
                    polar={[-0.1, Math.PI / 4]}
                  >
                    <Stage shadows={false}>
                      <MarsModel scale={0.25} />
                    </Stage>
                  </PresentationControls>
                  
                </Canvas>
                <div style={{position: 'absolute', right: '20%', top: '50%'}}>
                  <h2 className='marte-texto'>Planet<strong> Mars</strong></h2>
                  <p className='marte-texto' style={{width: 350, fontWeight: 700}}>{t('MarsText')}</p>
                </div>
              </section>

              <div className='stem-with-us-body'>
                <h1 id='blogs' style={{paddingTop: 25}}>{t('Blogs')}</h1>
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

        
                <h1 id='events' style={{paddingTop: 25}}>Next Events</h1>
                <div className='calendar_container'>
                  <Calendar className="calendario"
                    culture={localStorage.getItem("i18nextLng")}
                    localizer={localizer} 
                    events={events} 
                    startAccessor="start" 
                    endAccessor="end"
                    toolbar={true}
                    views={['month', 'agenda']}
                    selected={eventToShow}
                    onSelectSlot={(e) => handleSelectedEvent(e)}
                    onSelectEvent={(e) => handleSelectedEvent(e)}
                  />
                  {eventToShow && <Modal />}
                    {/*
                      Object.keys(eventToShow).length !== 0 ?
                      <section className="eventos" style={{marginTop: 75}}>
                          <Card>
                            <Card.Body>
                              <Card.Title>{new Date(eventToShow.start).toLocaleString(i18next.language, {day: 'numeric', month: 'long', hour:'numeric', minute:'numeric'})}</Card.Title>
                              <Card.Title>{eventToShow.title}</Card.Title>
                              <Card.Text> {eventToShow.location}</Card.Text>
                              <Button href={eventToShow.htmlLink}>{t('Seguir')}</Button>
                            </Card.Body>
                          </Card>
                      </section>
                      : <></>
                */}
                </div>
                
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
                  <h1 style={{textAlign: 'center'}}>{t('Recent-Videos')}</h1>
                  <Carousel touch controls={false}>
                    <Carousel.Item>
                      <div style={{position: 'relative'}}>
                        <a href="https://youtu.be/WZq6pxWE6bo?si=1YRu1UgsQ6xyBiUS" >
                          <img className='miniatura' src={} alt='miniatura de video'></img>
                          <h4 className='miniatura_overlay'>Matemáticas con Eduardo Álvarez | Expo STEM - Apolo 27</h4>
                        </a>
                      </div>
                    </Carousel.Item>

                    <Carousel.Item>
                      <div style={{position: 'relative'}}>
                        <a href="https://youtu.be/VdgKxA5YZes?si=RX3lEXToNDGxFRJG" >
                          <img className='miniatura' src={} alt='miniatura de video'></img>
                          <h4 className='miniatura_overlay'>Ingenieria con Cristopher Román | Expo STEM - Apolo 27</h4>
                        </a>
                      </div>
                    </Carousel.Item>

                    <Carousel.Item>
                      <div style={{position: 'relative'}}>
                        <a href="https://youtu.be/ldNraNcqhpU?si=39O15lLzcooCfKYR" >
                          <img className='miniatura' src={} alt='miniatura de video'></img>
                          <h4 className='miniatura_overlay'>Tecnologia con Darian Vargas | Expo STEM - Apolo 27</h4>
                        </a>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div style={{position: 'relative'}}>
                        <a href="https://www.youtube.com/watch?v=r19mb_sqVNg" >
                          <img className='miniatura' src={} alt='miniatura de video'></img>
                          <h4 className='miniatura_overlay'>Ciencia con Adriana Gosálbez | Expo STEM - Apolo 27</h4>
                        </a>
                      </div>
                    </Carousel.Item>
                    {/*
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
                    */}
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
                        <h2 className='reel_title'>School Visits</h2>
                        <h5 className='reel_subtitle'>Marking the difference</h5>
                      </a>
                      <a className='reel reel2' alt='reel' href='https://www.instagram.com/p/C2aZn8Frew6/'>
                        <h2 className='reel_title'>Activities with Apolo 27</h2>
                        <h5 className='reel_subtitle'>Fun events for kids</h5>
                      </a>
                      <a className='reel reel3' alt='reel' href='https://www.instagram.com/reel/CzcgK0xLmp6/'>
                        <h2 className='reel_title'>Manufacturing and design</h2>
                        <h5 className='reel_subtitle'>Showcasing the process of building our Rover</h5>
                      </a>
                      {
                        // <InstagramEmbed url="https://www.instagram.com/reel/CzcgK0xLmp6/" />
                        // <InstagramEmbed url="https://www.instagram.com/reel/Cwpoeu5r42a/" />
                        // <InstagramEmbed url="https://www.instagram.com/reel/C0PKP1ALnEL/" />
        
                      }
                  </div>
                </section>
        
                <section id='schoolvisit' className='contact-us' style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginTop: 150, marginBottom: 25}}>
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
                    <Button href='/ContactUs' style={{width: '275px', height: '75px', fontSize: '36px', fontWeight: 700}}>{t('Contactenos')}!</Button>
                  </div>
                  <img src={Fastronaut} className='astronautStemDER' alt='Female Astronaut'></img>
                </section>
              </div>
            </Container>
          </div>
        </div>
      </div>
    )
}

export default StemWithUs;