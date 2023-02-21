import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FragmentType, graphql, useFragment } from "../../models";
import {
  ComponentEventsSponsorship,
  ComponentEventsTimetable,
  Enum_Event_Status,
  EventDetailsFragmentDoc,
  EventLocation,
  Maybe,
  PlayerEntity,
  UploadFile,
  Venue,
} from "../../models/graphql";
import EventSidebar from "./sidebar";
import UpcomingEventTimer from "./timer";
import EventSchedule from "./schedule";
import PlayerGrid from "../players/grid";
import Gallery from "../layout/gallery";
import EventVenue from "./venue";
import EventDescription from "./description";
import EventSponsorships from "./sponsorships";
import EventDate from "./date";
import openTabSection from "../../libs/tabs";
import EventsNavigator from "./detailsnav";
import moment from "moment";
import ReactCountryFlag from "react-country-flag";
import { countries } from "country-data";

const EventDetails = (props: {
  event: FragmentType<typeof EventDetailsFragmentDoc>;
}) => {
  const event = useFragment(EventDetailsFragmentDoc, props.event);

  const description = `${event.name} @ ${
    event.venue?.data?.attributes?.name
  } from ${moment(event.start).format("MMMM Do")} to ${moment(event.end).format(
    "MMMM Do YYYY"
  )}`;

  const defaultImage = event.defaultImage.data?.attributes as UploadFile;
  const eventLocation = event.location?.data?.attributes as EventLocation;
  const venue = event.venue?.data?.attributes as Venue;
  const timetable = event.timetable as Array<Maybe<ComponentEventsTimetable>>;
  const players = event.players?.data as PlayerEntity[];
  const hosts = event.hosts?.data as PlayerEntity[];
  const mentors = event.mentors?.data as PlayerEntity[];
  const country = countries[eventLocation.country].name;

  return (
    <>
      <Head>
        <title>#play14 - {event && event.name}</title>
        <meta name="description" content={description} />
      </Head>
      <EventsNavigator current={event.slug} />
      <section className="events-details-area pt-70 pb-100">
        <ul className="d-flex list-unstyled justify-content-between">
          <li>
            <h1>
              {event.name}{" "}
              {eventLocation.country && (
                <ReactCountryFlag
                  countryCode={eventLocation.country}
                  svg
                  title={country}
                  aria-label={country}
                />
              )}
            </h1>
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
                priority
              />
            )}
          </div>
          {isAnnouncedOrOpen() && <UpcomingEventTimer date={event.start} />}
        </div>

        <div className="events-details-header">
          <div className="d-flex">
            <div className="flex-grow-1">
              <ul>
                {venue && (
                  <li>
                    <b>
                      {venue.website && (
                        <Link href={venue.website as string} target="_blank">
                          <i className="bx bx-home"></i>
                          {venue.name}
                        </Link>
                      )}
                      {!venue.website && (
                        <>
                          <i className="bx bx-home"></i>
                          {venue.name}
                        </>
                      )}
                    </b>
                  </li>
                )}
                {!venue && (
                  <li>
                    <b>
                      <i className="bx bx-home"></i>
                      No venue yet
                    </b>
                  </li>
                )}

                {venue && venue.addressDetails && (
                  <li>
                    <i className="bx bx-detail"></i>
                    {venue.addressDetails}
                  </li>
                )}
                {venue && (venue.location || venue.address) && (
                  <li>
                    <i className="bx bx-map"></i>
                    {(venue.location && venue.location.place_name) ||
                      venue.address}
                  </li>
                )}
                {eventLocation && eventLocation.country && (
                  <li>
                    <i className="bx bx-globe"></i>
                    {country}
                  </li>
                )}
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
          <div className="col-lg-8 col-md-12">
            {venue && <EventVenue venue={venue} />}
            {!venue && <h5>Should display event location map instead</h5>}
          </div>
          <div className="col-lg-4 col-md-12">
            <EventSidebar event={event} />
          </div>
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
              <li onClick={(e) => openTabSection(e, "tab3")}>
                Players{" "}
                {players && players.length > 0 ? `(${players.length})` : ""}
              </li>
              <li onClick={(e) => openTabSection(e, "tab4")}>
                Photos{" "}
                {event.images && event.images.data.length > 0
                  ? `(${event.images.data.length})`
                  : ""}
              </li>
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
                {event.images && <Gallery images={event.images.data} />}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
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
