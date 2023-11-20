import { countries } from "country-data"
import Image from "next/image"
import Link from "next/link"
import openTabSection from "../../libs/tabs"
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
} from "../../models/graphql"
import Gallery from "../layout/gallery"
import Map from "../map"
import PlayerGrid from "../players/grid"
import EventDate from "./date"
import EventDescription from "./description"
import EventsNavigator from "./detailsnav"
import EventSchedule from "./schedule"
import EventSidebar from "./sidebar"
import EventSponsorships from "./sponsorships"
import UpcomingEventTimer from "./timer"
//@ts-ignore
import ReactCountryFlag from "react-country-flag"
import Html from "../layout/html"
import ICalendar from "./ical"

const EventDetails = (props: { event: Event }) => {
  const { event } = props
  const defaultImage = event.defaultImage.data?.attributes as UploadFile
  const eventLocation = event.location?.data?.attributes as EventLocation
  const venue = event.venue?.data?.attributes as Venue
  const timetable = event.timetable as Array<Maybe<ComponentEventsTimetable>>
  const players = event.players?.data as PlayerEntity[]
  const hosts = event.hosts?.data as PlayerEntity[]
  const mentors = event.mentors?.data as PlayerEntity[]
  const country = countries[eventLocation.country!].name

  const participants = concatWithoutDuplicates(
    players,
    concatWithoutDuplicates(hosts, mentors),
  )

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
              timezone={event.timezone!}
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
              {/* Overview */}
              <li
                className="current"
                onClick={(e) => openTabSection(e, "overviewTab")}
              >
                Overview
              </li>

              {/* Registration */}
              {event.status == Enum_Event_Status.Open &&
                event.registration &&
                event.registration.widgetCode && (
                  <li onClick={(e) => openTabSection(e, "registrationTab")}>
                    Registration
                  </li>
                )}

              {/* Schedule */}
              <li onClick={(e) => openTabSection(e, "scheduleTab")}>
                Schedule
              </li>

              {/* Players */}
              <li onClick={(e) => openTabSection(e, "playersTab")}>
                Players{" "}
                {participants && participants.length > 0
                  ? `(${participants.length})`
                  : ""}
              </li>

              {/* Photos */}
              <li onClick={(e) => openTabSection(e, "photosTab")}>
                Photos{" "}
                {event.images && event.images.data.length > 0
                  ? `(${event.images.data.length})`
                  : ""}
              </li>
            </ul>

            <div className="tab-content">
              {/* Overview */}
              <div id="overviewTab" className="tab-pane tabs_item">
                {event.description && (
                  <EventDescription description={event.description} />
                )}
                {hosts && <PlayerGrid title="Team" players={hosts} />}
                {mentors && <PlayerGrid title="Mentors" players={mentors} />}
                {event.sponsorships && (
                  <EventSponsorships
                    sponsorships={
                      event.sponsorships as Array<ComponentEventsSponsorship>
                    }
                  />
                )}
              </div>
              {/* Schedule */}
              <div id="scheduleTab" className="tab-pane tabs_item">
                {timetable && <EventSchedule timetable={timetable} />}
              </div>

              {/* Players */}
              <div id="playersTab" className="tab-pane tabs_item">
                {players && (
                  <PlayerGrid title="Players" players={participants} />
                )}
              </div>

              {/* Photos */}
              <div id="photosTab" className="tab-pane tabs_item">
                {event.images && <Gallery images={event.images.data} />}
              </div>

              {/* Registration */}
              <div id="registrationTab" className="tab-pane tabs_item">
                <Html>{event.registration?.widgetCode!}</Html>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )

  function isAnnouncedOrOpen() {
    return isAnnounced() || isOpen()
  }

  function isAnnounced() {
    return event.status === Enum_Event_Status.Announced
  }

  function isOpen() {
    return event.status === Enum_Event_Status.Open
  }

  function concatWithoutDuplicates(
    arr1: PlayerEntity[],
    arr2: PlayerEntity[],
  ): PlayerEntity[] {
    const newArray: PlayerEntity[] = [...arr1]

    arr2.map((i) => {
      if (
        newArray.findIndex(
          (player) => player.attributes?.name == i.attributes?.name,
        ) < 0
      ) {
        newArray.push(i)
      }
    })

    return newArray.sort((a, b) => {
      const name1 = a.attributes?.name!
      const name2 = b.attributes?.name!
      return name1.localeCompare(name2)
    })
  }
}

export default EventDetails
