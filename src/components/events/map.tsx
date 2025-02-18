"use client"

import EventMarkers from "@/components/events/markers"
import { EventEntity } from "@/models/graphql"
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder"
import { useRef } from "react"
import Map, {
  FullscreenControl,
  GeolocateControl,
  MapRef,
  NavigationControl,
  ScaleControl,
} from "react-map-gl"

import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css"
import "mapbox-gl/dist/mapbox-gl.css"

const accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || ""

export default function EventMap({ events }: { events: EventEntity[] }) {
  const mapRef = useRef<MapRef | null>(null)

  const handleMapLoad = () => {
    if (mapRef.current) {
      const map = mapRef.current.getMap()
      const mapboxGeocoder = new MapboxGeocoder({
        marker: false,
        accessToken: accessToken,
      })
      map.addControl(mapboxGeocoder, "top-left")
    }
  }

  return (
    <div className="shadow">
      <Map
        initialViewState={{
          latitude: 25,
          longitude: 45,
          zoom: 2,
        }}
        style={{ width: "100%", height: "800px" }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        mapboxAccessToken={accessToken}
        onLoad={handleMapLoad}
        ref={mapRef}
      >
        <FullscreenControl />
        <NavigationControl />
        <GeolocateControl />
        <ScaleControl position="bottom-right" />
        {/* <GeocoderControl mapboxAccessToken={token} position="top-left" /> */}

        <EventMarkers events={events} />
      </Map>
    </div>
  )
}
