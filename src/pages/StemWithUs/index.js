import './StemWithUs.css'
import './BigCalendar.css'

import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';

import i18next from "i18next";
import { Calendar, momentLocalizer  } from "react-big-calendar";

import moment from 'moment';
import 'moment/locale/en-gb';
import 'moment/locale/es';


import {Container, Carousel, Card, Button } from "react-bootstrap";
import { getEvents } from "../../services/FetchCalendarEvents";
import { getTutorials, getRecentVideos } from "../../services/FetchYTVideos";

import TutorialMiniature from '../../components/TutorialMiniature';

import Fastronaut from '../../imgs/StemWithUs/Fastronaut.png';
import arrow from '../../imgs/StemWithUs/arrow.png'

import stem1 from '../../imgs/AboutUs/stem-1.jpg'
import stem2 from '../../imgs/AboutUs/stem-2.jpg'
import stem3 from '../../imgs/AboutUs/stem-3.jpg'




const localizer = momentLocalizer(moment);

const StemWithUs = (props) => {
  const [events, setEvents] = useState([])
  const [tutorials, setTutorials] = useState([])
  const [recentVideos, setRecentVideos] = useState([])
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
  }, []);
  
  return(
    <div className='stem-with-us' style={{textAlign: "center"}}>
      <Container>
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
          <section className="eventos">
          {
            events
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
          <Carousel touch>
            {
              recentVideos.map((vid, i) => {
                return(
                  <Carousel.Item key={i}>
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
  )
}

export default StemWithUs;