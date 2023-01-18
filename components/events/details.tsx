import Head from "next/head";
import Image from "next/image";
import EventSidebar from "./sidebar";
import UpcomingEventTimer from "./timer";
import { FragmentType, graphql, useFragment } from "../../models";
import EventTime from "./time";
import {
  ComponentEventsSponsorship,
  ComponentEventsTimetable,
  Enum_Event_Status,
  EventLocation,
  Maybe,
  UploadFile,
  Venue,
} from "../../models/graphql";
import openTabSection from "../../libs/tabs";
import EventSchedule from "./schedule";
import PlayerGrid from "../players/grid";
import Gallery from "./gallery";
import EventVenue from "./venue";
import EventStatus from "./status";
import EventDescription from "./description";
import EventSponsorships from "./sponsorships";

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
    images {
      data {
        attributes {
          name
          url
          width
          height
          hash
          mime
          provider
          size
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
          area
          address
          website
        }
      }
    }
    timetable {
      day
      description
      timeslots {
        time
        description
      }
    }
    sponsorships {
      category
      sponsors {
        data {
          attributes {
            name
            url
            logo {
              data {
                attributes {
                  name
                  url
                }
              }
            }
            socialNetworks {
              type
              url
            }
          }
        }
      }
    }
    hosts {
      data {
        attributes {
          ...PlayerItem
        }
      }
    }
    mentors {
      data {
        attributes {
          ...PlayerItem
        }
      }
    }
    players {
      data {
        attributes {
          ...PlayerItem
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

  const defaultImage = event.defaultImage.data?.attributes as UploadFile;
  const eventLocation = event.location?.data?.attributes as EventLocation;
  const venue = event.venue?.data?.attributes as Venue;
  const timetable = event.timetable as Array<Maybe<ComponentEventsTimetable>>;

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
            {defaultImage && (
              <Image
                src={defaultImage.url}
                alt={defaultImage.name}
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover",
                }}
              />
            )}
          </div>
          {isAnnouncedOrOpen() && <UpcomingEventTimer date={event.start} />}
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="events-details-header">
                <ul>
                  <li>
                    <i className="bx bx-time"></i>
                    <EventTime time={event.start} />
                  </li>
                  <li>
                    <i className="bx bx-flag"></i>
                    <EventTime time={event.end} />
                  </li>
                  <li>
                    <i className="bx bx-map"></i>
                    {eventLocation && eventLocation.name},{" "}
                    {eventLocation && eventLocation.country}
                  </li>
                  <li>
                    <i className="bx bx-map"></i>
                    {venue.name}
                  </li>
                  <li>
                    <EventStatus status={event.status} />
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
                  <li onClick={(e) => openTabSection(e, "tab3")}>Players</li>
                  <li onClick={(e) => openTabSection(e, "tab4")}>Photos</li>
                </ul>

                <div className="tab-content">
                  <div id="tab1" className="tab-pane tabs_item">
                    {venue && <EventVenue venue={venue} />}
                    {event.hosts && (
                      <PlayerGrid title="Team" players={event.hosts} />
                    )}
                    {event.mentors && (
                      <PlayerGrid title="Mentors" players={event.mentors} />
                    )}
                    {event.sponsorships && (
                      <EventSponsorships
                        sponsorships={
                          event.sponsorships as Array<ComponentEventsSponsorship>
                        }
                      />
                    )}
                    {event.description && (
                      <EventDescription description={event.description} />
                    )}
                  </div>

                  <div id="tab2" className="tab-pane tabs_item">
                    {timetable && <EventSchedule timetable={timetable} />}
                  </div>

                  <div id="tab3" className="tab-pane tabs_item">
                    {event.players && (
                      <PlayerGrid title="Players" players={event.players} />
                    )}
                  </div>

                  <div id="tab4" className="tab-pane tabs_item">
                    {event.images && <Gallery images={event.images} />}
                  </div>
                </div>
              </div>
            </div>

            {isOpen() && <EventSidebar event={event} />}
          </div>
        </div>
      </section>
    </article>
  );

  function isAnnouncedOrOpen() {
    return isAnnounced() || isOpen();
  }

  function isAnnounced() {
    return event.status === Enum_Event_Status.Announced;
  }

  function isOpen() {
    return event.status === Enum_Event_Status.Open;
  }
};

export default EventDetails;
