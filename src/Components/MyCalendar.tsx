import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'; // Import the CSS for the calendar

const localizer = momentLocalizer(moment);

// Corrected interface for the event list
interface Event {
  start: Date;
  end: Date;
  title?: string; // Optional title property if you want to display event titles
}

// Correctly typed event list
const myEventsList: Event[] = [
  {
    start: moment("2024-06-26T10:00:00").toDate(),
    end: moment("2024-06-26T11:00:00").toDate(),
    title:"Repentance"
  },
];

const MyCalendar = () => (
  <div>
    <Calendar
      localizer={localizer}
      events={myEventsList}
      defaultView='week'
      views={['month','week','day']}
      style={{ height: 500 }}
    />
  </div>
);

export default MyCalendar;
