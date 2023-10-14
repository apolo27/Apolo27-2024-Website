import request from "superagent";

let GOOGLE_CALENDAR_URL = `https://www.googleapis.com/calendar/v3/calendars/${process.env.REACT_APP_CALENDAR_ID}/events?key=${process.env.REACT_APP_API_KEY}`

export function getEvents(callback) {
  request.get(GOOGLE_CALENDAR_URL).end((err, resp) => {
    if (!err) {
      const events = [];
      JSON.parse(resp.text).items.map(event => {
        console.log(event)
        return events.push({
          start: new Date(event.start.date.toString()),
          end: new Date(event.end.date.toString()),
          title: event.summary
        });
      });
      callback(events);
    }
  });
}