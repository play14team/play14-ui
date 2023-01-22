import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FragmentType, graphql, useFragment } from "../../models";
import {
  ComponentEventsSponsorship,
  ComponentEventsTimetable,
  Enum_Event_Status,
  EventLocation,
  Maybe,
  PlayerEntity,
  UploadFile,
  Venue,
} from "../../models/graphql";
import EventSidebar from "./sidebar";
import UpcomingEventTimer from "./timer";
import EventTime from "./time";
import Location from "../layout/location";
import EventSchedule from "./schedule";
import PlayerGrid from "../players/grid";
import Gallery from "./gallery";
import EventVenue from "./venue";
import EventStatus from "./status";
import EventDescription from "./description";
import EventSponsorships from "./sponsorships";
import EventDate from "./date";
import openTabSection from "../../libs/tabs";

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
      id
      day
      description
      timeslots {
        id
        time
        description
      }
    }
    registration {
      link
      widgetCode
    }
    sponsorships {
      id
      category
      sponsors {
        data {
          id
          attributes {
            name
            url
            logo {
              data {
                attributes {
                  name
                  url
                  blurhash
                }
              }
            }
            socialNetworks {
              id
              type
              url
            }
          }
        }
      }
    }
    hosts(sort: "name") {
      data {
        id
        attributes {
          ...PlayerItem
        }
      }
    }
    mentors(sort: "name") {
      data {
        id
        attributes {
          ...PlayerItem
        }
      }
    }
    players(sort: "name") {
      data {
        id
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
  const players = event.players?.data as PlayerEntity[];
  const hosts = event.hosts?.data as PlayerEntity[];
  const mentors = event.mentors?.data as PlayerEntity[];

  return (
    <article>
      <Head>
        <title>#play14 - {event && event.name}</title>
        <meta name="description" content={description} />
      </Head>
      <section className="events-details-area pt-70 pb-100">
        <ul className="d-flex list-unstyled justify-content-between">
          <li>
            <h1>{event.name}</h1>
          </li>
          <li>
            <h2>
              <EventDate start={event.start} end={event.end} />
            </h2>
          </li>
        </ul>

        <div className="events-details-image">
          <div style={{ position: "relative", width: "100%", height: "250px" }}>
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

        <div className="events-details-header">
          <div className="d-flex">
            <div className="flex-grow-1">
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
                  <Location
                    city={eventLocation.name}
                    country={eventLocation.country}
                  />
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
            {event.contactEmail && (
              <ul className="d-flex">
                <li>
                  <Link href={`mailto:${event.contactEmail}`}>
                    <i
                      className="bx bx-envelope"
                      style={{ fontSize: "25px" }}
                    ></i>
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>

        <div className="row">
          {isOpen() && (
            <>
              <div className="col-lg-8 col-md-12">
                {venue && <EventVenue venue={venue} />}
              </div>
              <div className="col-lg-4 col-md-12">
                <EventSidebar event={event} />
              </div>
            </>
          )}
          {!isOpen() && (
            <div className="col-lg-12 col-md-12">
              {venue && <EventVenue venue={venue} />}
            </div>
          )}
        </div>

        {/* tabs */}
        <div className="row">
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
              {/* tab1 */}
              <div id="tab1" className="tab-pane tabs_item">
                {hosts && <PlayerGrid title="Team" players={hosts} />}
                {mentors && <PlayerGrid title="Mentors" players={mentors} />}
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

              {/* tab2 */}
              <div id="tab2" className="tab-pane tabs_item">
                {timetable && <EventSchedule timetable={timetable} />}
              </div>

              {/* tab3 */}
              <div id="tab3" className="tab-pane tabs_item">
                {players && <PlayerGrid title="Players" players={players} />}
              </div>

              {/* tab4 */}
              <div id="tab4" className="tab-pane tabs_item">
                {event.images && <Gallery images={event.images} />}
              </div>
            </div>
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
