import Link from "next/link";
import Image from "next/image";
import event1 from "../../styles/images/events/event1.jpg";
import EventDate from "./date";

import { FragmentType, useFragment } from "../../models/fragment-masking";
import EventStatus from "./status";
import { EventItemFragmentDoc } from "../../models/graphql";

const EventCard = (props: {
  event: FragmentType<typeof EventItemFragmentDoc>;
}) => {
  const event = useFragment(EventItemFragmentDoc, props.event);
  const url = `/events/${encodeURIComponent(event.slug)}`;
  const image = event.defaultImage.data?.attributes;

  return (
    <article className="col-lg-4 col-sm-6 col-md-6">
      <div className="single-events-box">
        <div className="image">
          <Link href={url} className="d-block">
            <Image
              src={(image && image.url) || event1}
              alt={(image && image.name) || "image"}
              width={400}
              height={400}
              priority
              placeholder="blur"
              blurDataURL={(image && image.blurhash) || undefined}
              style={{
                maxWidth: "100%",
                objectFit: "cover",
              }}
            />
          </Link>
          <span className="date">
            <EventDate start={event.start} end={event.end} displayYear />
          </span>
        </div>

        <div className="content">
          <h3>
            <Link href={url}>{event.name}</Link>
          </h3>
          <ul className="d-flex list-unstyled justify-content-between">
            <li>
              <span className="location">
                <i className="bx bx-map"></i>{" "}
                {event.location?.data?.attributes?.name}
                {event.location?.data?.attributes?.country && ", "}
                {event.location?.data?.attributes?.country}
              </span>
            </li>
            <li>
              <span className="location">
                <EventStatus status={event.status} />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default EventCard;
