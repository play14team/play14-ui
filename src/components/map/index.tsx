"use client"

import "mapbox-gl/dist/mapbox-gl.css"
import Map, {
  FullscreenControl,
  Marker,
  NavigationControl,
  Popup,
} from "react-map-gl/mapbox"

interface MapViewProps {
  location?: {
    geometry: {
      coordinates: [number, number]
    }
    place_name: string
  }
  height?: string
  zoom?: number
  popup?: boolean
}

const MapView = ({ location, height, zoom, popup }: MapViewProps) => {
  const point = location ? location.geometry : null
  const longitude = point ? point.coordinates[0] : 10
  const latitude = point ? point.coordinates[1] : 40
  const address = location ? location.place_name : null

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
