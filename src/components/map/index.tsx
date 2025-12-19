"use client"

import "mapbox-gl/dist/mapbox-gl.css"
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

  return (
    <div className="shadow">
      <Map
        initialViewState={{
          latitude: latitude,
          longitude: longitude,
          zoom: zoomLevel,
        }}
        style={{ width: "100%", height: height || "500px" }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        mapboxAccessToken={token}
      >
        <FullscreenControl />
        <NavigationControl />

        {location && (
          <Marker longitude={longitude} latitude={latitude} color="#ffc900" />
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
