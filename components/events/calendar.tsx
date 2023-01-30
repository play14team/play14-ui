import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import { useRouter } from "next/router";

const localizer = momentLocalizer(moment);

const EventCalendar = (props: { events: any }) => {
  const router = useRouter();
  const { events } = props;
  const views = [Views.MONTH];
  const onDoubleClickEvent = (event: any, e: any) => {
    router.push("/events/" + event.slug);
  };

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
          onDoubleClickEvent={onDoubleClickEvent}
          style={{ height: 500 }}
        />
      )}
    </div>
  );
};

export default EventCalendar;
