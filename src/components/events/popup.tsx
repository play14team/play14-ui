import Link from "next/link"
import { Popup } from "react-map-gl/mapbox"
import { Enum_Event_Eventstatus, Event } from "../../models/graphql"
import EventDate from "./date"

const EventPopup = ({
  events,
  onClose,
}: {
  events: Event[]
  onClose: () => void
}) => {
  if (!events || events.length === 0) return null

  const venue = events[0].venue
  if (!venue?.location?.geometry?.coordinates) {
    return null
  }

  const longitude = venue.location.geometry.coordinates[0]
  const latitude = venue.location.geometry.coordinates[1]
  const offset: [number, number] = [0, -35]

  return (
    <Popup
      anchor="bottom-right"
      longitude={Number(longitude)}
      latitude={Number(latitude)}
      offset={offset}
      onClose={onClose}
      style={{ minWidth: "200px" }}
    >
      <Link href={venue.website || "#"} target="_blank">
        <h6>{venue.name}</h6>
      </Link>
      <br />
      {venue.location?.place_name}
      <hr />
      {events.map((event) => {
        const slug = event.slug
        const name = event.name
        const start = event.start
        const end = event.end
        const timezone = event.timezone
        const status = event.eventStatus

        const color = mapColor(status)
        const style = { color: color }

        return (
          <div key={name}>
            <div className="d-flex justify-content-between">
              <b>
                <Link href={`/events/${slug}`} style={style}>
                  {name}
                </Link>
              </b>
              {status == Enum_Event_Eventstatus.Open &&
                event.registration?.link && (
                  <Link href={event.registration.link} target="_blank">
                    <b>Register now</b>
                  </Link>
                )}
            </div>
            <div className="d-flex justify-content-between pb-2">
              <span>
                <EventDate start={start} end={end} timezone={timezone!} />
              </span>
              {status}
            </div>
          </div>
        )
      })}
    </Popup>
  )
}

export const mapColor = (status: Enum_Event_Eventstatus | undefined) => {
  switch (status) {
    case Enum_Event_Eventstatus.Announced:
      return "#ffc900"
    case Enum_Event_Eventstatus.Open:
      return "#92c900"
    case Enum_Event_Eventstatus.Over:
      return "#0098dd"
    case Enum_Event_Eventstatus.Cancelled:
      return "#393939"
    default:
      return "#ff5200"
  }
}

export default EventPopup
