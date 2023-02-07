import * as React from "react";
import Map, {
  Marker,
  FullscreenControl,
  GeolocateControl,
  NavigationControl,
} from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";
import Page from "../../components/layout/page";
import GeocoderControl from "../../components/map/geocoder-control";

const EventMap = () => {
  return (
    <Page
      name="Events map"
      description="All the #play14 events on an interactive map"
    >
      <div className="pt-5 pb-100">
        <Map
          initialViewState={{
            latitude: 45,
            longitude: 15,
            zoom: 1.5,
          }}
          style={{ width: "100%", height: "100vh" }}
          mapStyle="mapbox://styles/mapbox/streets-v12"
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        >
          <FullscreenControl />
          <NavigationControl />
          <GeolocateControl />
          <Marker longitude={15} latitude={45} color="orange" />
          <GeocoderControl
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
            position="top-left"
          />
        </Map>
      </div>
    </Page>
  );
};

export default EventMap;
