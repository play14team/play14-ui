import Link from "next/link";
import { Popup } from "react-map-gl";
import { Enum_Event_Status, EventEntity } from "../../models/graphql";
import EventDate from "./date";

const EventPopup = (props: { event: EventEntity; onClose: () => void }) => {
  const { event } = props;
  const slug = event.attributes!.slug;
  const name = event.attributes!.name;
  const start = event.attributes!.start;
  const end = event.attributes!.end;
  const status = event.attributes!.status;

  const color = mapColor(status);
  const style = { color: color };

  const geoJSON = event.attributes?.venue?.data?.attributes?.location;
  const longitude = geoJSON.geometry.coordinates[0];
  const latitude = geoJSON.geometry.coordinates[1];

  return (
    <Popup
      anchor="top"
      longitude={Number(longitude)}
      latitude={Number(latitude)}
      onClose={props.onClose}
    >
      <div key={name}>
        <div className="d-flex justify-content-between">
          <b>
            <Link href={`/events/${slug}`} style={style}>
              {name}
            </Link>
          </b>
          {status == Enum_Event_Status.Open &&
            event.attributes?.registration?.link && (
              <Link
                href={event.attributes.registration.link}
                target="_blank"
                style={style}
              >
                <b>Register now</b>
              </Link>
            )}
        </div>
        <div className="d-flex justify-content-between pb-2">
          <span>
            <EventDate start={start} end={end} />
          </span>
          {status}
        </div>
      </div>
    </Popup>
  );
};

const mapColor = (status: Enum_Event_Status | undefined) => {
  switch (status) {
    case Enum_Event_Status.Announced:
      return "#ffc900";
    case Enum_Event_Status.Open:
      return "#92c900";
    case Enum_Event_Status.Over:
      return "#0098dd";
    case Enum_Event_Status.Cancelled:
      return "#393939";
    default:
      return "#ff5200";
  }
};

export default EventPopup;
