import { deduplicate } from "@/libs/arrays"
import clm from "country-locale-map"
import Image from "next/image"
import Link from "next/link"
import ReactCountryFlag from "react-country-flag"
import {
  Enum_Event_Status,
  Event,
  EventLocation,
  PlayerEntity,
  UploadFile,
  Venue,
} from "../../models/graphql"
import Map from "../map"
import EventDate from "./date"
import ICalendar from "./ical"
import EventsNavigator from "./nav"
import EventSidebar from "./sidebar"
import EventTabs from "./tabs"
import UpcomingEventTimer from "./timer"

export default function EventDetails({ event }: { event: Event }) {
  const defaultImage = event.defaultImage.data?.attributes as UploadFile
  const eventLocation = event.location?.data?.attributes as EventLocation
  const venue = event.venue?.data?.attributes as Venue
  const country = clm.getCountryNameByAlpha2(eventLocation.country!)
  const players = event.players?.data as PlayerEntity[]
  const hosts = event.hosts?.data as PlayerEntity[]
  const mentors = event.mentors?.data as PlayerEntity[]
  const participants = deduplicate(players, hosts, mentors)

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
                unoptimized
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

        <div className="row">
          <div className="courses-details-desc">
            <EventTabs event={event} participants={participants} />
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
}
