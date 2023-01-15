import Head from "next/head";
import Image from "next/image";
import EventSidebar from "./sidebar";
import UpcomingEventTimer from "./timer";
import EventDate from "./date";
import details from "../../styles/images/events/events-details.jpg";
import { FragmentType, graphql, useFragment } from "../../models";
import ReactHtmlParser from "react-html-parser";
import { relative } from "path";

const EventDetailsFragment = graphql(`
  fragment EventDetails on Event {
    slug
    name
    start
    end
    status
    description
    contactEmail
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
    venue {
      data {
        attributes {
          name
          embeddedMapUrl
          address {
            street
            area
            postalCode
            city
          }
        }
      }
    }
  }
`);

const EventDetails = (props: {
  event: FragmentType<typeof EventDetailsFragment>;
}) => {
  const event = useFragment(EventDetailsFragment, props.event);

  const description = `${event.name} @ ${event.venue?.data?.attributes?.name} on ${event.start}`;

  return (
    <article>
      <Head>
        <title>#play14 - {event && event.name}</title>
        <meta name="description" content={description} />
      </Head>
      <section className="events-details-area pb-100">
        <div className="events-details-image">
          <div style={{ position: "relative" }}>
            {event.defaultImage.data?.attributes && (
              <Image
                src={event.defaultImage.data?.attributes?.url}
                alt={event.defaultImage.data?.attributes?.name}
                width={200}
                height={200}
                // fill={true}
                // style={{
                //   maxWidth: "100%",
                //   height: "auto",
                // }}
                // sizes="(max-width: 768px) 100vw,
                //         (max-width: 1200px) 50vw,
                //         33vw"
              />
            )}
          </div>

          <UpcomingEventTimer date={event.start} />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="events-details-header">
                <ul>
                  <li>
                    <i className="bx bx-calendar"></i>
                    <EventDate start={event.start} end={event.end} />
                  </li>
                  <li>
                    <i className="bx bx-map"></i>
                    {event.location?.data?.attributes?.name},{" "}
                    {event.location?.data?.attributes?.country}
                  </li>
                  <li>
                    <i className="bx bx-time"></i>
                    {event.start}
                  </li>
                  <li>
                    <i className="bx bx-right-arrow"></i>
                    {event.status}
                  </li>
                </ul>
              </div>

              <div className="events-details-location">
                {event.venue?.data?.attributes?.embeddedMapUrl && (
                  <iframe
                    src={event.venue?.data?.attributes?.embeddedMapUrl}
                  ></iframe>
                )}
              </div>

              <div className="events-details-desc">
                {event.description && ReactHtmlParser(event.description)}
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <EventSidebar event={event} />
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default EventDetails;
