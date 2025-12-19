import Link from "next/link"
import { Popup } from "react-map-gl/mapbox"
import { Enum_Event_Eventstatus, Event, GeoLocation } from "@/models/strapi"
import EventDate from "./date"

// Helper to extract coordinates from either location format
function getCoordinates(
  location: GeoLocation | undefined,
): [number, number] | null {
  if (!location) return null

  // Handle Mapbox format (geometry.coordinates)
  if ("geometry" in location && location.geometry?.coordinates) {
    return [location.geometry.coordinates[0], location.geometry.coordinates[1]]
  }

  // Handle simple format (lat/lng)
  if (
    "lng" in location &&
    "lat" in location &&
    location.lng !== undefined &&
    location.lat !== undefined
  ) {
    return [location.lng, location.lat]
  }

  return null
}

const EventPopup = ({
  events,
  onClose,
}: {
  events: Event[]
  onClose: () => void
}) => {
  if (!events || events.length === 0) return null

  const venue = events[0].venue
  if (!venue) {
    return null
  }
  const coords = getCoordinates(venue.location)
  if (!coords) {
    return null
  }

  const [longitude, latitude] = coords
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
                  <Link
                    href={event.registration.link}
                    target="_blank"
                    style={{ color: "#ff5200" }}
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

export const mapColor = (
  status: Enum_Event_Eventstatus | string | undefined,
) => {
  switch (status) {
    case Enum_Event_Eventstatus.Announced:
    case "Announced":
      return "#ffc900" // Yellow
    case Enum_Event_Eventstatus.Open:
    case "Open":
      return "#ff5200" // Orange
    case Enum_Event_Eventstatus.Over:
    case "Over":
      return "#92c900" // Green
    case Enum_Event_Eventstatus.Cancelled:
    case "Cancelled":
      return "#393939" // Dark gray (not displayed)
    default:
      return "#0098dd" // Blue (fallback)
  }
}

export default EventPopup
