import { EventEntity } from "@/models/graphql"
import { useMemo, useState } from "react"
import { Marker } from "react-map-gl/mapbox"
import EventPopup, { mapColor } from "./popup"

export default function EventMarkers({ events }: { events: EventEntity[] }) {
  const [popupInfo, setPopupInfo] = useState<EventEntity[]>([])
  const markers = useMemo(
    () =>
      events &&
      events.map((event, index) => {
        const geoJSON = event.attributes?.venue?.data?.attributes?.location

        if (geoJSON && geoJSON.geometry) {
          const longitude = geoJSON.geometry.coordinates[0]
          const latitude = geoJSON.geometry.coordinates[1]
          const venueId = event.attributes?.venue?.data?.id || ""
          const predicate = (event: EventEntity) =>
            venueId == event.attributes?.venue?.data?.id || ""
          const markerEvents = events.filter(predicate)

          return (
            <Marker
              key={`marker-${index}`}
              longitude={longitude}
              latitude={latitude}
              color={mapColor(event.attributes?.status)}
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
