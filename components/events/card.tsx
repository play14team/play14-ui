import Link from "next/link";
import Image from "next/image";
import event1 from "../../styles/images/events/event1.jpg";
import EventDate from "./date";

import { FragmentType, useFragment } from "../../models/fragment-masking";
import { graphql } from "../../models";

export const EventFragment = graphql(`
  fragment EventItem on Event {
    slug
    name
    start
    end
    status
    defaultImage {
      data {
        attributes {
          name
          url
        }
      }
    }
    location {
      data {
        attributes {
          name
          country
        }
      }
    }
  }
`);

const EventCard = (props: { evt: FragmentType<typeof EventFragment> }) => {
  const event = useFragment(EventFragment, props.evt);
  const url = `/events/${encodeURIComponent(event.slug)}`;

  return (
    <article className="col-lg-4 col-sm-6 col-md-6">
      <div className="single-events-box">
        <div className="image">
          <Link href={url} className="d-block">
            <Image
              src={event.defaultImage.data?.attributes?.url || event1}
              alt={event.defaultImage.data?.attributes?.name || "image"}
              // fill={true}
              width={400}
              height={400}
              style={{
                maxWidth: "100%",
                objectFit: "cover",
              }}
            />
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
            <Link href={url} legacyBehavior>
              {event.name}
            </Link>
          </h3>
          <h6>{event.status}</h6>
          <span className="location">
            <i className="bx bx-map"></i>{" "}
            {event.location?.data?.attributes?.name}
            {event.location?.data?.attributes?.country && ", "}
            {event.location?.data?.attributes?.country}
          </span>
        </div>
      </div>
    </article>
  );
};

export default EventCard;
