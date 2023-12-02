import './StemWithUs.css'
import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import i18next from "i18next";
import {format, getDay, parse, startOfWeek} from "date-fns";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { getEvents } from "../../services/FetchCalendarEvents";
import { getRecentVideos, getTutorials } from "../../services/FetchYTVideos";
import {Container, Carousel, Card, Button } from "react-bootstrap";
import { InstagramEmbed } from 'react-social-media-embed';

import Form from "../../components/Form";
import TutorialMiniature from '../../components/TutorialMiniature';

import pin from "../../imgs/pin.png"
import Fastronaut from '../../imgs/StemWithUs/Fastronaut.png';

import miniatura1 from '../../imgs/StemWithUs/MiniaturaDeVideos/miniatura1.png'
import miniatura2 from '../../imgs/StemWithUs/MiniaturaDeVideos/miniatura2.png'
import miniatura3 from '../../imgs/StemWithUs/MiniaturaDeVideos/miniatura3.png'
import arrow from '../../imgs/StemWithUs/arrow.png'



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
  const [tutorials, setTutorials] = useState([])
  const [lastAPIFetchDay, setLastAPIFetchDay] = useState(Date)
  const t = props.t;

  let todayDate = new Date();

  useEffect(() => {
    if(todayDate !== lastAPIFetchDay){
      //getEvents(setEvents)
      //getTutorials()
      //setTutorials(JSON.parse(localStorage.getItem("tutorials")))
      setLastAPIFetchDay(new Date())
    }
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
                  <Card.Body style={{backgroundColor: '#161A2C', boxShadow: '0px 2px 35px px rgba(0, 100, 250, 0.25), 0px 4px 30.7px 0px rgba(0, 100, 250, 0.25)'}}>
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
          {
            tutorials.length > 0 ?  
              <div className='tutorialsLine-top'>
              <h2>STEM TUTORIALS</h2>
              <Link to="https://www.youtube.com/@apolo2730" className='ver-mas'><p>{t('ShowMore')}<img src={arrow}></img></p></Link>
            </div>
            : <></>
          }
         
          <div className='tutorialsLine'>
            {
              tutorials.map((video) => {
                return(
                  <TutorialMiniature key={video.url} img={video.thumbnail} name={video.title}/>
                  )
              })
            } 
          </div>
        </section>

          <section className='recent-videos'>
            <h1>Recent Videos</h1>
            <Carousel touch>
              <Carousel.Item>
              <img className='d-block w-100' src={miniatura1} alt='miniatura de video'></img>
                <Carousel.Caption>
                  <Button>{t('WatchVideo')}</Button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <img className='d-block w-100' src={miniatura2} alt='miniatura de video'></img>
                <Carousel.Caption>
                  <Button>{t('WatchVideo')}</Button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <img className='d-block w-100' src={miniatura3} alt='miniatura de video'></img>
                <Carousel.Caption>
                  <Button>{t('WatchVideo')}</Button>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </section>

          <section className='tutorials'>
            <div className='tutorialsLine-top'>
              <h2>Reels</h2>
              <Link to="https://www.instagram.com/apolo27_rd/" className='ver-mas'><p>{t('ShowMore')}<img src={arrow}></img></p></Link>
            </div>
            <div className='tutorialsLine'>
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