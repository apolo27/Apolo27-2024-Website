import React, { useState, useEffect } from "react";
import { getEvents } from "../../FetchCalendarEvents";
import {format, getDay, parse, startOfWeek} from "date-fns";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Card, Button } from "react-bootstrap";
import Form from "../../components/Form";
import './StemWithUs.css'

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

const StemWithUs = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    getEvents(setEvents)
  }, []);

  return(
    <div style={{textAlign: "center"}}>
      <h1>STEM WITH US</h1>
      <div className="calendario">
        <Calendar localizer={localizer} events={events} 
        startAccessor="start" 
        endAccessor="end"
        defaultView="month"
        style={{height: 500, margin: "50px"}}/>
      </div>
      <section className="eventos">
      {
        events.map((event) => {
          return(
            <Card style={{ width: '18rem', margin: '15px'}} key={event.title}>
            <Card.Body>
              <Card.Title>{event.title}</Card.Title>
              <Card.Title>{event.description}</Card.Title>
              <Card.Title>Inicio: {event.start.toString()}</Card.Title>
              <Card.Title>Fin: {event.end.toString()}</Card.Title>
              <Card.Title>Estado del evento: {event.status}</Card.Title>
              <Button href={event.htmlLink}>Seguir</Button>
            </Card.Body>
          </Card>
          )
        })
        }
      </section>
      <h1>Contactenos</h1>
        <Form />
    </div>
  )
}

export default StemWithUs;