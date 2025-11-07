import { Event } from "@/models/graphql"
import { useMemo, useState } from "react"
import { Marker } from "react-map-gl/mapbox"
import EventPopup, { mapColor } from "./popup"

export default function EventMarkers({ events }: { events: Event[] }) {
  const [popupInfo, setPopupInfo] = useState<Event[]>([])
  const markers = useMemo(
    () =>
      events &&
      events.map((event, index) => {
        const geoJSON = event.venue?.location

        if (geoJSON && geoJSON.geometry) {
          const longitude = geoJSON.geometry.coordinates[0]
          const latitude = geoJSON.geometry.coordinates[1]
          const venueId = event.venue?.documentId || ""
          const predicate = (event: Event) =>
            venueId == event.venue?.documentId || ""
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
      }),
    [events],
  )

  return (
    <>
      {markers}
      {popupInfo && (
        <EventPopup events={popupInfo} onClose={() => setPopupInfo([])} />
      )}
    </>
  )
}
