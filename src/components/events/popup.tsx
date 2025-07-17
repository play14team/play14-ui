import Link from "next/link"
import { Popup } from "react-map-gl/mapbox"
import { Enum_Event_Status, EventEntity } from "../../models/graphql"
import EventDate from "./date"

const EventPopup = ({
  events,
  onClose,
}: {
  events: EventEntity[]
  onClose: () => void
}) => {
  if (!events || events.length == 0) return

  const venue = events[0].attributes!.venue!.data!.attributes!
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
        const slug = event.attributes!.slug
        const name = event.attributes!.name
        const start = event.attributes!.start
        const end = event.attributes!.end
        const timezone = event.attributes!.timezone
        const status = event.attributes!.status

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
              {status == Enum_Event_Status.Open &&
                event.attributes?.registration?.link && (
                  <Link
                    href={event.attributes.registration.link}
                    target="_blank"
                  >
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

export const mapColor = (status: Enum_Event_Status | undefined) => {
  switch (status) {
    case Enum_Event_Status.Announced:
      return "#ffc900"
    case Enum_Event_Status.Open:
      return "#92c900"
    case Enum_Event_Status.Over:
      return "#0098dd"
    case Enum_Event_Status.Cancelled:
      return "#393939"
    default:
      return "#ff5200"
  }
}

export default EventPopup
