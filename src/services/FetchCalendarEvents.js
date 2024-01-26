import request from "superagent";
import moment from 'moment';

let GOOGLE_CALENDAR_URL = `https://www.googleapis.com/calendar/v3/calendars/${process.env.REACT_APP_CALENDAR_ID}/events?key=${process.env.REACT_APP_API_KEY}`

export function getEvents(callback) {
  request.get(GOOGLE_CALENDAR_URL).end((err, resp) => {
    if (!err) {
      const events = [];
      console.log(resp.body.items);
      JSON.parse(resp.text).items.map(event => {
        return events.push({
          title: event.summary,
          htmlLink: event.htmlLink,
          start: moment(event.start.dateTime).toDate(),
          end: moment(event.end.dateTime).toDate(),
          location: event.location
        });
      });
      sessionStorage.setItem("events", JSON.stringify(events))
      const storedEventsString = sessionStorage.getItem('events');
      const storedEventsArray = JSON.parse(storedEventsString);
      callback(storedEventsArray)
    }
  });
}