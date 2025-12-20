import { Event, GeoLocation } from "@/models/strapi"
import { useTheme } from "next-themes"
import { useEffect, useMemo, useState } from "react"
import { Marker } from "react-map-gl/mapbox"
import EventPopup, { mapColor } from "./popup"

// Helper to extract coordinates from either location format
function getCoordinates(
  location: GeoLocation | undefined,
): [number, number] | null {
  if (!location) return null

  // Handle Mapbox format (geometry.coordinates)
  if ("geometry" in location && location.geometry?.coordinates) {
    const coords: [number, number] = [
      location.geometry.coordinates[0],
      location.geometry.coordinates[1],
    ]
    return coords
  }

  // Handle simple format (lat/lng)
  if (
    "lng" in location &&
    "lat" in location &&
    typeof location.lng === "number" &&
    typeof location.lat === "number"
  ) {
    return [location.lng, location.lat]
  }

  return null
}

export default function EventMarkers({ events }: { events: Event[] }) {
  const [popupInfo, setPopupInfo] = useState<Event[]>([])
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && resolvedTheme === "dark"

  const markers = useMemo(() => {
    return events
      .map((event, index) => {
        const coords = getCoordinates(event.venue?.location)

        if (coords) {
          const [longitude, latitude] = coords
          const venueId = event.venue?.documentId

          // Filter events at the same venue by matching coordinates and venue ID
          const predicate = (e: Event) => {
            const eCoords = getCoordinates(e.venue?.location)
            if (!eCoords) return false

            const [eLng, eLat] = eCoords

            // Match by venue documentId if available, otherwise match by exact coordinates
            if (venueId && e.venue?.documentId) {
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
              color={mapColor(event.eventStatus, isDark)}
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
      .filter(Boolean) // Remove null values
  }, [events, isDark])

  return (
    <>
      {markers}
      {popupInfo.length > 0 && (
        <EventPopup events={popupInfo} onClose={() => setPopupInfo([])} />
      )}
    </>
  )
}
