"use client"

import { EventEntity } from "@/models/graphql"

import Map, {
  FullscreenControl,
  GeolocateControl,
  NavigationControl,
} from "react-map-gl/mapbox"
import GeocoderControl from "../map/geocoder"

import "mapbox-gl/dist/mapbox-gl.css"
import EventMarkers from "./markers"

const TOKEN = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN

export default function EventMap({ events }: { events: EventEntity[] }) {
  if (!TOKEN) {
    return (
      <span style={{ color: "red" }}>
        Mapbox access token not found. Please add a
        NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN environment variable and set it with a
        valid Mapbox api token.
      </span>
    )
  }

  return (
    <>
      <div className="centered pb-5">
        <p>Total: {events.length}</p>
      </div>
      <div className="shadow">
        <Map
          initialViewState={{
            latitude: 25,
            longitude: 45,
            zoom: 2,
          }}
          style={{ width: "100%", height: "800px" }}
          mapStyle="mapbox://styles/mapbox/streets-v12"
          mapboxAccessToken={TOKEN}
          attributionControl={false}
        >
          {/* Map Controls */}
          <FullscreenControl />
          <NavigationControl />
          <GeolocateControl />
          <GeocoderControl mapboxAccessToken={TOKEN} position="top-left" />
          <EventMarkers events={events} />
        </Map>
      </div>
    </>
  )
}
