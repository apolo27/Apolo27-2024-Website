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
import { InstagramEmbed } from 'react-social-media-embed';

import { getEvents } from "../../services/FetchCalendarEvents";
import { getTutorials } from "../../services/FetchYTVideos";

import TutorialMiniature from '../../components/TutorialMiniature';

import Fastronaut from '../../imgs/StemWithUs/Fastronaut.png';
import miniatura1 from '../../imgs/StemWithUs/MiniaturaDeVideos/miniatura1.png'
import miniatura2 from '../../imgs/StemWithUs/MiniaturaDeVideos/miniatura2.png'
import miniatura3 from '../../imgs/StemWithUs/MiniaturaDeVideos/miniatura3.png'
import arrow from '../../imgs/StemWithUs/arrow.png'



const localizer = momentLocalizer(moment);

const StemWithUs = (props) => {
  const [events, setEvents] = useState([])
  const [tutorials, setTutorials] = useState([])
  let t = props.t;

  const todayDate = new Date();

  useEffect(() => {
    if(localStorage.getItem("events") === null){
      getEvents(setEvents)
      console.log("se hizo la api call de los eventos")
      console.log("events es null?: ", events ===null)
    } else{
      setEvents(JSON.parse(localStorage.getItem('events')))
    }
    if(localStorage.getItem("tutorials") === null){
      getTutorials(setTutorials)
      console.log("se hizo la api call de los tutoriales")
      console.log("tutorials es null?: ", tutorials ===null)
    }else{
      setTutorials(JSON.parse(localStorage.getItem('tutorials')))
    }
  }, []);
  
  return(
    <div className='stem-with-us' style={{textAlign: "center"}}>
      <Container>
      <section className='data-dashboard-intro'>
        <h4>
          Las STEM son:
        </h4>
      </section>
        <h1>{t('Eventos_Proximos')}</h1>
        <iframe src="https://embed.styledcalendar.com/#SYehxKPEb9fxwLmaOV6x" title="Styled Calendar" className="styled-calendar-container" 
          style={{border: 'none', height: 720}}></iframe>
        <script async type="module" src="https://embed.styledcalendar.com/assets/parent-window.js"></script>
        {
        /*
          <Calendar 
            className="calendario"
            culture={localStorage.getItem("i18nextLng")}
            localizer={localizer} 
            events={events} 
            startAccessor="start" 
            endAccessor="end"
            toolbar={true}
            views={['month', 'agenda']}
            style={{marginTop: '50px'}}
          />

          */
        }

       <section className="eventos">
       {
         events
         .map((event) => {
           return(
             <Card style={{ width: '16rem', margin: '15px'}} key={event.title}>
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
        <section className='tutorials'>
          {
            (tutorials !== null) ?  
              <div className='tutorialsLine-top'>
              <h2>{t('Stem-Tutorials')}</h2>
              <Link to="https://www.youtube.com/@apolo2730" className='ver-mas'><p>{t('ShowMore')}<img src={arrow} alt='arrow'></img></p></Link>
            </div>
            : <></>
          }
         
          <div className='tutorialsLine'>
            {
              tutorials !== null ?
              tutorials.map((video) => {
                return(
                  <TutorialMiniature key={video.url} img={video.thumbnail} name={video.title}/>
                  )
              })
              : <></>
            } 
          </div>
        </section>

          <section className='recent-videos'>
            <h1>{t('Recent-Videos')}</h1>
            <Carousel touch>
              <Carousel.Item interval={2000}>
              <img className='d-block w-100' src={miniatura1} alt='miniatura de video'></img>
                <Carousel.Caption>
                  <Button href='https://www.youtube.com/watch?v=PJAnAb7hfrU&t=6s'>{t('WatchVideo')}</Button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
              <img className='d-block w-100' src={miniatura2} alt='miniatura de video'></img>
                <Carousel.Caption>
                  <Button href='https://youtu.be/PvG-7RNjtOU?si=tebiFn4ekwad5arv'>{t('WatchVideo')}</Button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
              <img className='d-block w-100' src={miniatura3} alt='miniatura de video'></img>
                <Carousel.Caption>
                  <Button href='https://youtu.be/kdeYjX8Reoo?si=3m2gQ2Jw9l0f5Itq'>{t('WatchVideo')}</Button>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </section>

          <section className='tutorials'>
            <div className='tutorialsLine-top'>
              <h2>Reels</h2>
              <Link to="https://www.youtube.com/@apolo2730" className='ver-mas'><p>{t('ShowMore')}<img src={arrow} alt='arrow'></img></p></Link>
            </div>
            <div className='reelsLine'>
                <InstagramEmbed url="https://www.instagram.com/reel/CzcgK0xLmp6/" width={375} />
                <InstagramEmbed url="https://www.instagram.com/reel/Cwpoeu5r42a/" width={375} />
                <InstagramEmbed url="https://www.instagram.com/reel/C0PKP1ALnEL/" width={375} />
            </div>
          </section>
          
        <section style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
          <img src={Fastronaut} className='astronautStemIZQ' alt='Female Astronaut'></img>
          <div className='contact-us'>
            <h2>{t('Plan-a-meeting')}</h2>
            <Button href='/Contact-Us' style={{width: '325px', height: '100px', fontSize: '48px', fontWeight: 700}}>{t('Contactenos')}!</Button>
          </div>
          <img src={Fastronaut} className='astronautStemDER' alt='Female Astronaut'></img>
        </section>
      </Container>
    </div>
  )
}

export default StemWithUs;