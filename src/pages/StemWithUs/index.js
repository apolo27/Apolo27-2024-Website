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

import background from '../../imgs/StemWithUs/background.png'
import Fastronaut from '../../imgs/StemWithUs/Fastronaut.png';
import arrow from '../../imgs/StemWithUs/arrow.png'



const localizer = momentLocalizer(moment);

const StemWithUs = (props) => {
  const [events, setEvents] = useState([])
  const [tutorials, setTutorials] = useState([])
  const [recentVideos, setRecentVideos] = useState([])
  let t = props.t;

  useEffect(() => {

    if(localStorage.getItem("events") === null){
      getEvents(setEvents)
    } else{
      setEvents(JSON.parse(localStorage.getItem('events')))
    }

    if(localStorage.getItem("tutorials") === null){
      getTutorials(setTutorials)
    }else{
      setTutorials(JSON.parse(localStorage.getItem('tutorials')))
    }

    if(localStorage.getItem("recentVideos") === null){
      getRecentVideos(setRecentVideos)
    }else{
      setRecentVideos(JSON.parse(localStorage.getItem('recentVideos')))
    }
  }, []);
  
  return(
    <div className='stem-with-us' style={{textAlign: "center"}}>
      <Container>
        <h1 style={{paddingTop: 25}}>{t('Eventos_Proximos')}</h1>
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

       <section className="eventos">
       {
         events
         .map((event) => {
           return(
             <Card style={{ width: '300px', margin: '15px'}} key={event.title}>
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
              tutorials.map((video) => {
                return(
                  <TutorialMiniature key={video.url} img={video.thumbnail} name={video.title}/>
                  )
              })
              : <></>
            } 
          </div>
        </section>

        <section>
          <h2>{t('Recent-Videos')}</h2>
          <Carousel touch>
            {
              recentVideos.map((vid, i) => {
                return(
                  <Carousel.Item key={i}>
                    <img style={{borderRadius: 25}} src={vid.thumbnail} alt='miniatura de video'></img>
                    
                      <h2>{vid.title}</h2>
                      <Button href={vid.url}>Ver video</Button>
                  </Carousel.Item>
                )
              })
            }
          </Carousel>
        </section>
          
        <section>
          <div className='tutorialsLine-top'>
            <h2>Reels</h2>
            <Link to="https://www.instagram.com/apolo27_rd/reels/" className='ver-mas'>
              <p>{t('ShowMore')}
                <img src={arrow} alt='arrow'>
                </img>
              </p>
            </Link>
          </div>
          <div className='reelsLine'>
              <div className='reel' alt='reel'>
                <h2 className='reel_title'>Visitas Escolares</h2>
                <h5 className='reel_subtitle'>Marcando la diferencia</h5>
              </div>
              <div className='reel' alt='reel'>
                <h2 className='reel_title'>Actividades con Apolo 27</h2>
                <h5 className='reel_subtitle'>Sorteos y más</h5>
              </div>
              <div className='reel' alt='reel'>
                <h2 className='reel_title'>Manufactura y diseño</h2>
                <h5 className='reel_subtitle'>Demostración de nuestro empeño</h5>
              </div>
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