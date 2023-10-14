import React, { useState, useEffect } from "react";
import request from "superagent";
import {format, getDay, parse, startOfWeek} from "date-fns";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Card from 'react-bootstrap/Card';
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

let GOOGLE_CALENDAR_URL = `https://www.googleapis.com/calendar/v3/calendars/${process.env.REACT_APP_CALENDAR_ID}/events?key=${process.env.REACT_APP_API_KEY}`


const StemWithUs = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      request.get(GOOGLE_CALENDAR_URL).end((err, resp) => {
        if (!err) {
          JSON.parse(resp.text).items.map(event => {
            console.log(event)
            let newEvent = {
              start: new Date(event.start.date.toString()),
              end: new Date(event.end.date.toString()),
              title: event.summary
            }
            setEvents([...events, newEvent]);
          });
        }
      });
    }

    fetchData()

  });

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
      <h1>Contactenos</h1>
        <Form />
    </div>
  )
}

export default StemWithUs;