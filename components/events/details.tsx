import Image from "next/image";
import Link from "next/link";
import {
  ComponentEventsSponsorship,
  ComponentEventsTimetable,
  Enum_Event_Status,
  Event,
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
import EventDescription from "./description";
import EventSponsorships from "./sponsorships";
import EventDate from "./date";
import openTabSection from "../../libs/tabs";
import EventsNavigator from "./detailsnav";
import Map from "../map";
import ReactCountryFlag from "react-country-flag";
import { countries } from "country-data";
import ICalendar from "./ical";

const EventDetails = (props: { event: Event }) => {
  const { event } = props;
  const defaultImage = event.defaultImage.data?.attributes as UploadFile;
  const eventLocation = event.location?.data?.attributes as EventLocation;
  const venue = event.venue?.data?.attributes as Venue;
  const timetable = event.timetable as Array<Maybe<ComponentEventsTimetable>>;
  const players = event.players?.data as PlayerEntity[];
  const hosts = event.hosts?.data as PlayerEntity[];
  const mentors = event.mentors?.data as PlayerEntity[];
  const country = countries[eventLocation.country].name;

  const participants = concatWithoutDuplicates(
    players,
    concatWithoutDuplicates(hosts, mentors)
  );

  return (
    <>
      <h1 className="pt-5">
        <ul className="d-flex list-unstyled justify-content-between">
          <li>
            {event.name}{" "}
            {eventLocation.country && (
              <ReactCountryFlag
                countryCode={eventLocation.country}
                svg
                title={country}
                aria-label={country}
                style={{ paddingBottom: "8px" }}
              />
            )}
          </li>
          <li>
            <EventDate
              start={event.start}
              end={event.end}
              timezone={event.timezone}
            />
          </li>
        </ul>
      </h1>
      <div className="events-details-area">
        <EventsNavigator current={event.slug} />
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
                {venue && venue.location && (
                  <li>
                    <i className="bx bx-map"></i>
                    {venue.location.place_name}
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
                      title="Send an email to the team"
                      style={{ fontSize: "25px" }}
                    ></i>
                  </Link>
                </li>
              </ul>
            )}
            <ul className="d-flex">
              <li>
                <ICalendar event={event} />
              </li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8 col-md-12">
            <div className="events-details-location">
              {venue && venue.location && (
                <Map location={venue.location} height={"450px"} popup />
              )}
              {!venue && eventLocation.location && (
                <Map
                  location={eventLocation.location}
                  height={"450px"}
                  zoom={12}
                />
              )}
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <EventSidebar event={event} participants={participants} />
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
                {participants && participants.length > 0
                  ? `(${participants.length})`
                  : ""}
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
                {players && (
                  <PlayerGrid title="Players" players={participants} />
                )}
              </div>

              {/* tab4 */}
              <div id="tab4" className="tab-pane tabs_item">
                {event.images && <Gallery images={event.images.data} />}
              </div>
            </div>
          </div>
        </div>
      </div>
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

  function concatWithoutDuplicates(
    arr1: PlayerEntity[],
    arr2: PlayerEntity[]
  ): PlayerEntity[] {
    const newArray: PlayerEntity[] = [...arr1];

    arr2.map((i) => {
      if (
        newArray.findIndex(
          (player) => player.attributes?.name == i.attributes?.name
        ) < 0
      ) {
        newArray.push(i);
      }
    });

    return newArray.sort((a, b) =>
      a.attributes?.name.localeCompare(b.attributes?.name)
    );
  }
};

export default EventDetails;
