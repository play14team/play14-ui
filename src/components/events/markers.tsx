import { Event } from "@/models/graphql"
import { useMemo, useState } from "react"
import { Marker } from "react-map-gl/mapbox"
import EventPopup, { mapColor } from "./popup"

export default function EventMarkers({ events }: { events: Event[] }) {
  const [popupInfo, setPopupInfo] = useState<Event[]>([])

  const markers = useMemo(
    () =>
      events
        .map((event, index) => {
          const geoJSON = event.venue?.location

          if (geoJSON && geoJSON.geometry && geoJSON.geometry.coordinates) {
            const longitude = geoJSON.geometry.coordinates[0]
            const latitude = geoJSON.geometry.coordinates[1]
            const venueId = event.venue?.documentId

            // Filter events at the same venue by matching coordinates and venue ID
            const predicate = (e: Event) => {
              if (!e.venue?.location?.geometry?.coordinates) return false

              const eLng = e.venue.location.geometry.coordinates[0]
              const eLat = e.venue.location.geometry.coordinates[1]

              // Match by venue documentId if available, otherwise match by exact coordinates
              if (venueId && e.venue.documentId) {
                return venueId === e.venue.documentId
              }

              return eLng === longitude && eLat === latitude
            }

            const markerEvents = events.filter(predicate)

            return (
              <Marker
                key={`marker-${index}`}
                longitude={longitude}
                latitude={latitude}
                color={mapColor(event.eventStatus)}
                style={{ cursor: "pointer" }}
                onClick={(e) => {
                  e.originalEvent.stopPropagation()
                  setPopupInfo(markerEvents)
                }}
              />
            )
          }
          return null
        })
        .filter(Boolean), // Remove null values
    [events],
  )

  return (
    <>
      {markers}
      {popupInfo.length > 0 && (
        <EventPopup events={popupInfo} onClose={() => setPopupInfo([])} />
      )}
    </>
  )
}
