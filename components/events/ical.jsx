import ICalendarLink from "react-icalendar-link";

const ICalendar = ({ event }) => {
  const evt = {
    title: `#play14 - ${event.name}`,
    startTime: event.start,
    endTime: event.end,
    location: event.venue?.data?.attributes
      ? `${event.venue.data.attributes.name} - ${event.venue.data.attributes.location.place_name}`
      : "No venue yet",
    url: event.venue?.data?.attributes
      ? event.venue.data.attributes.website
      : "",
  };

  return (
    <ICalendarLink event={evt} filename={`${event.name}.ics`}>
      <i
        className="bx bx-calendar"
        title="Add to your calendar"
        style={{ fontSize: "25px" }}
      ></i>
    </ICalendarLink>
  );
};

export default ICalendar;
