import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

const localizer = momentLocalizer(moment);

const EventCalendar = (props: { events: any }) => {
  const { events } = props;

  return (
    <div>
      {events && (
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
      )}
    </div>
  );
};

export default EventCalendar;
