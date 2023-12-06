import request from "superagent";
import moment from 'moment';

let GOOGLE_CALENDAR_URL = `https://www.googleapis.com/calendar/v3/calendars/eb0b2023b62a9c7786d70d56ae5b16d70aa695d3949875514f988c9bbc57068e@group.calendar.google.com/events?key=${process.env.REACT_APP_API_KEY}`

export function getEvents(callback) {
  request.get(GOOGLE_CALENDAR_URL).end((err, resp) => {
    if (!err) {
      const events = [];
      JSON.parse(resp.text).items.map(event => {
        return events.push({
          title: event.summary,
          htmlLink: event.htmlLink,
          start: moment(event.start.dateTime).toDate(),
          end: moment(event.end.dateTime).toDate(),
          location: event.location
        });
      });
      localStorage.setItem("events", JSON.stringify(events))
      const storedEventsString = localStorage.getItem('events');
      const storedEventsArray = JSON.parse(storedEventsString);
      callback(storedEventsArray)
    }
  });
}