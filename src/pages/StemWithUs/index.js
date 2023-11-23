import './StemWithUs.css'
import React, { useState, useEffect } from "react";
import i18next from "i18next";
import {format, getDay, parse, startOfWeek} from "date-fns";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { getEvents } from "../../services/FetchCalendarEvents";
import {Container, Card, Button } from "react-bootstrap";
import Form from "../../components/Form";
import pin from "../../imgs/pin.png"
import Fastronaut from '../../imgs/StemWithUs/Fastronaut.png'

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

  var today = new Date()

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
        <h1>{t('Contactenos')}</h1>
        <section className="section-formulario">
          <img src={Fastronaut} className='astronautStem' alt='Female Astronaut'></img>
          <Form t={t}/>
        </section>
      </Container>
    </div>
  )
}

export default StemWithUs;