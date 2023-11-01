import './StemWithUs.css'
import React, { useState, useEffect } from "react";
import i18next from "i18next";
import { getEvents } from "../../FetchCalendarEvents";
import {format, getDay, parse, startOfWeek} from "date-fns";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { Card, Button } from "react-bootstrap";
import Form from "../../components/Form";

import pin from "../../imgs/pin.png"

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
      <h1>STEM WITH US</h1>
      <div className="calendario">
        <Calendar localizer={localizer} events={events} 
        startAccessor="start" 
        endAccessor="end"
        defaultView="month"
        //toolbar={false}
        style={{height: 500, margin: "50px"}}/>
      </div>
      
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
        <Form t={t}/>
      </section>
    </div>
  )
}

export default StemWithUs;