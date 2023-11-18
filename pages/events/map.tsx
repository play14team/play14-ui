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
import { useQuery } from "@apollo/client";
import { EventEntity, MarkersDocument } from "../../models/graphql";
import Loader from "../../components/layout/loader";
import ErrorMessage from "../../components/layout/error";
import { useMemo, useState } from "react";
import EventPopup, { mapColor } from "../../components/events/popup";

const EventMap = () => {
  const { data, loading, error } = useQuery(MarkersDocument);
  const events = data?.events?.data as EventEntity[];

  const [popupInfo, setPopupInfo] = useState(null);

  const token =
    process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN ||
    "pk.eyJ1IjoicGxheTE0IiwiYSI6ImNsaHk1dzRlNDB6Z2szbG1kMnJybHFpeWMifQ.gRYXSA5Gjoph0caYvDvHMA";

  const pins = useMemo(
    () =>
      events &&
      events.map((event, index) => {
        const geoJSON = event.attributes?.venue?.data?.attributes?.location;

        if (geoJSON && geoJSON.geometry) {
          const longitude = geoJSON.geometry.coordinates[0];
          const latitude = geoJSON.geometry.coordinates[1];

          return (
            <Marker
              key={`marker-${index}`}
              longitude={longitude}
              latitude={latitude}
              color={mapColor(event.attributes.status)}
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                e.originalEvent.stopPropagation();
                setPopupInfo(
                  events.filter(
                    (e) =>
                      e.attributes!.venue!.data!.id ==
                      event.attributes!.venue!.data!.id,
                  ),
                );
              }}
            />
          );
        }
      }),
    [events],
  );

  return (
    <Page
      name="Events map"
      description="All the #play14 events on an interactive map"
    >
      <div className="pt-5 pb-100">
        {loading && <Loader />}
        {error && <ErrorMessage message={error.message} />}
        {!loading && (
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

            {pins}

            {popupInfo && (
              <EventPopup
                events={popupInfo}
                onClose={() => setPopupInfo(null)}
              />
            )}
          </Map>
        )}
      </div>
    </Page>
  );
};

export default EventMap;
