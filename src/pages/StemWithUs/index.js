import React, { useState } from "react";
import { getEvents } from "../../FetchCalendarEvents";
import {format, getDay, parse, startOfWeek} from "date-fns";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import Card from 'react-bootstrap/Card';
import "react-big-calendar/lib/css/react-big-calendar.css";
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
  getEvents((events) => {
    setEvents(events)
  })

  return(
    <div style={{textAlign: "center"}}>
      <h1>STEM WITH US</h1>
      <div className="calendario">
        <Calendar localizer={localizer} events={events} 
        startAccessor="start" 
        endAccessor="end"
        defaultView="month"
        style={{height: 500, margin: "50px"}}/>
        {
          events.map((event) => {
            return(
              <Card style={{ width: '18rem', margin: '15px'}}>
              <Card.Body>
                <Card.Title>{event.title}</Card.Title>
                <Card.Title>{event.start.toISOString()}</Card.Title>
                <Card.Title>{event.end.toISOString()}</Card.Title>
              </Card.Body>
            </Card>
            )
          })
        }
      </div>
    </div>
  )
}

export default StemWithUs;