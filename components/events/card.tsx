import Link from "next/link";
import { EventSummary } from "./types";
import Image from "next/image";
import event1 from "../../styles/images/events/event1.jpg";
import EventDate from "./date";

const EventCard = (event: EventSummary) => {
  const url = `/events/${encodeURIComponent(event.slug)}`;

  return (
    <article className="col-lg-4 col-sm-6 col-md-6">
      <div className="single-events-box">
        <div className="image">
          <Link href={url}>
            <a className="d-block">
              <Image src={event1} alt="event" />
            </a>
          </Link>
          <span className="date">
            <EventDate
              start={event.start}
              end={event.end}
              className="published"
            />
          </span>
        </div>

        <div className="content">
          <h3>
            <Link href={url}>{event.name}</Link>
          </h3>
          <span className="location">
            <i className="bx bx-map"></i> Vancover, Canada
          </span>
        </div>
      </div>
    </article>
  );
};

export default EventCard;
