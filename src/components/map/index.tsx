"use client"

import "mapbox-gl/dist/mapbox-gl.css"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import Map, {
  FullscreenControl,
  Marker,
  NavigationControl,
  Popup,
} from "react-map-gl/mapbox"

interface MapboxLocation {
  geometry: {
    coordinates: [number, number]
  }
  place_name: string
}

interface SimpleLocation {
  lat?: number
  lng?: number
  place_name?: string
}

type LocationType = MapboxLocation | SimpleLocation

interface MapViewProps {
  location?: LocationType
  height?: string
  zoom?: number
  popup?: boolean
}

function isMapboxLocation(loc: LocationType): loc is MapboxLocation {
  return "geometry" in loc && loc.geometry !== undefined
}

const MapView = ({ location, height, zoom, popup }: MapViewProps) => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  let longitude = 10
  let latitude = 40
  let address: string | null = null

  if (location) {
    if (isMapboxLocation(location)) {
      longitude = location.geometry.coordinates[0]
      latitude = location.geometry.coordinates[1]
      address = location.place_name
    } else if (location.lng !== undefined && location.lat !== undefined) {
      longitude = location.lng
      latitude = location.lat
      address = location.place_name || null
    }
  }

  const token =
    process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN ||
    "pk.eyJ1IjoicGxheTE0IiwiYSI6ImNsaHk1dzRlNDB6Z2szbG1kMnJybHFpeWMifQ.gRYXSA5Gjoph0caYvDvHMA"
  const offset = [0, -35] as [number, number]
  const zoomLevel = location ? zoom || 15 : 1

  // Theme-aware map style and marker color
  const isDark = mounted && resolvedTheme === "dark"
  const mapStyle = isDark
    ? "mapbox://styles/mapbox/navigation-night-v1"
    : "mapbox://styles/mapbox/streets-v12"
  const markerColor = isDark ? "#ffd633" : "#ffc900"

  return (
    <div className="shadow">
      <Map
        initialViewState={{
          latitude: latitude,
          longitude: longitude,
          zoom: zoomLevel,
        }}
        style={{ width: "100%", height: height || "500px" }}
        mapStyle={mapStyle}
        mapboxAccessToken={token}
      >
        <FullscreenControl />
        <NavigationControl />

        {location && (
          <Marker
            longitude={longitude}
            latitude={latitude}
            color={markerColor}
          />
        )}

        {popup && (
          <Popup
            anchor="bottom-right"
            longitude={longitude}
            latitude={latitude}
            offset={offset}
            closeButton={false}
            closeOnClick={false}
          >
            {address}
          </Popup>
        )}
      </Map>
    </div>
  )
}

export default MapView
