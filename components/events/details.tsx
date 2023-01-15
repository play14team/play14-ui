import Head from "next/head";
import Image from "next/image";
import EventSidebar from "./sidebar";
import UpcomingEventTimer from "./timer";
import { FragmentType, graphql, useFragment } from "../../models";
import ReactHtmlParser from "react-html-parser";
import EventTime from "./time";
import { Enum_Event_Status } from "../../models/graphql";
import openTabSection from "../../libs/tabs";
import EventSchedule from "./schedule";
import PlayerGrid from "../players/grid";
import EventMedia from "./media";

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
        <h1>{event.name}</h1>
        <div className="events-details-image">
          <div style={{ position: "relative", width: "100%", height: "300px" }}>
            {event.defaultImage.data?.attributes && (
              <Image
                src={event.defaultImage.data?.attributes?.url}
                alt={event.defaultImage.data?.attributes?.name}
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover",
                }}
              />
            )}
          </div>
          {event.status === Enum_Event_Status.Announced ||
            (event.status === Enum_Event_Status.Open && (
              <UpcomingEventTimer date={event.start} />
            ))}
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="events-details-header">
                <ul>
                  <li>
                    <i className="bx bx-calendar"></i>
                    <EventTime time={event.start} />
                  </li>
                  <li>
                    <i className="bx bx-time"></i>
                    <EventTime time={event.end} />
                  </li>
                  <li>
                    <i className="bx bx-map"></i>
                    {event.location?.data?.attributes?.name},{" "}
                    {event.location?.data?.attributes?.country}
                  </li>
                  <li>
                    <i className="bx bx-right-arrow"></i>
                    {event.status}
                  </li>
                </ul>
              </div>

              <div className="courses-details-desc">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li
                    className="current"
                    onClick={(e) => openTabSection(e, "tab1")}
                  >
                    Overview
                  </li>
                  <li onClick={(e) => openTabSection(e, "tab2")}>Schedule</li>
                  <li onClick={(e) => openTabSection(e, "tab3")}>
                    Team & Players
                  </li>
                  <li onClick={(e) => openTabSection(e, "tab4")}>
                    Photos & media
                  </li>
                </ul>

                <div className="tab-content">
                  <div id="tab1" className="tab-pane tabs_item">
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

                  <div id="tab2" className="tab-pane tabs_item">
                    <EventSchedule />
                  </div>

                  <div id="tab3" className="tab-pane tabs_item">
                    <PlayerGrid />
                  </div>

                  <div id="tab4" className="tab-pane tabs_item">
                    <EventMedia />
                  </div>
                </div>
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
