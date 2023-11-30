import './StemWithUs.css'
import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import i18next from "i18next";
import {format, getDay, parse, startOfWeek} from "date-fns";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { getEvents } from "../../services/FetchCalendarEvents";
import {Container, Carousel, Card, Button } from "react-bootstrap";
import { InstagramEmbed } from 'react-social-media-embed';

import Form from "../../components/Form";
import TutorialMiniature from '../../components/TutorialMiniature';

import pin from "../../imgs/pin.png"
import Fastronaut from '../../imgs/StemWithUs/Fastronaut.png';

import miniatura1 from '../../imgs/StemWithUs/Tutorials/miniatura1.webp'
import miniatura2 from '../../imgs/StemWithUs/Tutorials/miniatura2.webp'
import miniatura4 from '../../imgs/StemWithUs/Tutorials/miniatura4.webp'
import miniatura6 from '../../imgs/StemWithUs/Tutorials/miniatura6.webp'



const locales = {
  "en-US": require("date-fns/locale/en-US")
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})

const StemWithUs = (props) => {
  const [events, setEvents] = useState([])
  const t = props.t;

  useEffect(() => {
  //getEvents(setEvents)
  }, []);

  return(
    <div className='stem-with-us' style={{textAlign: "center"}}>
      <Container>
        
        <Calendar localizer={localizer} events={events} 
          className="calendario"
          startAccessor="start" 
          endAccessor="end"
          defaultView="month"
          toolbar={false}
          style={{height: 500, backgroundColor: '#161A2C', color: 'white', padding: '25px', borderRadius: '25px'}}/>
        
        <h2>{t('Eventos_Proximos')}</h2>
        <section className="eventos">
        {
          events.map((event) => {
            return(
              <Card style={{ width: '18rem', margin: '15px'}} key={event.title}>
                <Card.Body style={{backgroundColor: '#F1AEAE'}}>
                  <Card.Title>{event.start.toLocaleString(i18next.language,{year:'numeric', month:'long', day:'numeric', hour:'numeric', minute:'numeric'})}</Card.Title>
                  <Card.Title>{event.title}</Card.Title>
                  <Card.Text> <img src={pin} alt='pin' width={20}></img> {event.location}</Card.Text>
                  <Button href={event.htmlLink}>{t('Seguir')}</Button>
                </Card.Body>
              </Card>
              )
          })
          }
        </section>

        <section className='tutorials'>
          <h1>STEM TUTORIALS</h1>
          <div className='tutorialsLine-top'>
            <h1>{props.title}</h1>
            <Link to="https://www.youtube.com/@apolo2730" style={{textDecoration: 'none'}}><p>Ver todos</p></Link>
          </div>
          <div className='tutorialsLine'>
            <TutorialMiniature img={miniatura1} name="youtube tutorial"/>
            <TutorialMiniature img={miniatura2} name="youtube tutorial"/>
            <TutorialMiniature img={miniatura4} name="youtube tutorial"/>
            <TutorialMiniature img={miniatura6} name="youtube tutorial"/>
          </div>
        </section>

          <section className='recent-videos'>
            <h1>Recent Videos</h1>
            <Carousel>
              <Carousel.Item>
              <img className='d-block w-100' src={miniatura1}></img>
                <Carousel.Caption>
                  <h1>Video title</h1>
                  <Button>Watch video</Button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <img className='d-block w-100' src={miniatura2}></img>
                <Carousel.Caption>
                  <h1>Video title</h1>
                  <Button>Watch video</Button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <img className='d-block w-100' src={miniatura6}></img>
                <Carousel.Caption>
                  <h1>Video title</h1>
                  <Button>Watch video</Button>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </section>

          <section className='reels'>
            <h1>Reels</h1>
            <div className='tutorialsLine-top'>
            <h1>{props.title}</h1>
            <Link to="https://www.instagram.com/apolo27_rd/" style={{textDecoration: 'none'}}><p>Ver todos</p></Link>
          </div>
          <div className='tutorialsLine'>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <InstagramEmbed url="https://www.instagram.com/reel/CzcgK0xLmp6/" width={328} />
            <InstagramEmbed url="https://www.instagram.com/reel/Cwpoeu5r42a/" width={328} />
            <InstagramEmbed url="https://www.instagram.com/reel/C0PKP1ALnEL/" width={328} />
            <InstagramEmbed url="https://www.instagram.com/reel/CyMbNpiLHjH/" width={328} />
          </div>
          </div>
          </section>

        <section>
          <h1>{t('Contactenos')}</h1>
          <div className="section-formulario">
            <img src={Fastronaut} className='astronautStem' alt='Female Astronaut'></img>
            <Form t={t}/>
          </div>
        </section>
      </Container>
    </div>
  )
}

export default StemWithUs;