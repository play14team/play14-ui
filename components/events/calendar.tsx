import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";

const localizer = momentLocalizer(moment);

const EventCalendar = (props: { events: any }) => {
  const { events } = props;
  const views = [Views.MONTH];

  return (
    <div>
      {events && (
        <Calendar
          localizer={localizer}
          events={events}
          defaultView="month"
          views={views}
          startAccessor="start"
          endAccessor="end"
          tooltipAccessor="tooltip"
          style={{ height: 500 }}
        />
      )}
    </div>
  );
};

export default EventCalendar;
