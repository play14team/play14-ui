"use client"

import EventMarkers from "@/components/events/markers"
import GeocoderControl from "@/components/map/geocoder-control"
import { EventEntity } from "@/models/graphql"
import "mapbox-gl/dist/mapbox-gl.css"
import Map, {
  FullscreenControl,
  GeolocateControl,
  NavigationControl,
} from "react-map-gl"

const token =
  process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN ||
  "pk.eyJ1IjoicGxheTE0IiwiYSI6ImNsaHk1dzRlNDB6Z2szbG1kMnJybHFpeWMifQ.gRYXSA5Gjoph0caYvDvHMA"

export default function EventMap({ events }: { events: EventEntity[] }) {
  return (
    <div className="shadow">
      <Map
        initialViewState={{
          latitude: 25,
          longitude: 15,
          zoom: 1.5,
        }}
        style={{ width: "100%", height: "800px" }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        mapboxAccessToken={token}
      >
        <FullscreenControl />
        <NavigationControl />
        <GeolocateControl />
        <GeocoderControl mapboxAccessToken={token} position="top-left" />

        <EventMarkers events={events} />
      </Map>
    </div>
  )
}
