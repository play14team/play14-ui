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
import {
  Enum_Event_Status,
  EventEntity,
  MarkersDocument,
} from "../../models/graphql";
import Loader from "../../components/layout/loader";
import ErrorMessage from "../../components/layout/error";
import { useMemo, useState } from "react";
import Link from "next/link";
import EventPopup from "../../components/events/popup";

const EventMap = () => {
  const { data, loading, error } = useQuery(MarkersDocument);
  const events = data?.events?.data as EventEntity[];

  const [popupInfo, setPopupInfo] = useState(null);

  // const clusters = getClusters(events);

  const pins = useMemo(
    () =>
      events &&
      events.map((event, index) => {
        const geoJSON = event.attributes?.venue?.data?.attributes?.location;
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
              setPopupInfo(event);
            }}
          />
        );
      }),
    [events]
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
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
          >
            <FullscreenControl />
            <NavigationControl />
            <GeolocateControl />
            <GeocoderControl
              mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
              position="top-left"
            />

            {pins}

            {popupInfo && (
              <EventPopup
                event={popupInfo}
                onClose={() => setPopupInfo(null)}
              />
            )}
          </Map>
        )}
      </div>
    </Page>
  );
};

const getClusters = (events: EventEntity[]) => {
  return events.reduce((clusters: any, event) => {
    const venueId = event.attributes!.venue!.data!.id!;
    clusters[venueId] = clusters[venueId] || [];
    clusters[venueId].push(event);
    return clusters;
  }, {});
};

const mapColor = (status: Enum_Event_Status | undefined) => {
  switch (status) {
    case Enum_Event_Status.Announced:
      return "#ffc900";
    case Enum_Event_Status.Open:
      return "#92c900";
    case Enum_Event_Status.Over:
      return "#0098dd";
    case Enum_Event_Status.Cancelled:
      return "#393939";
    default:
      return "#ff5200";
  }
};

export default EventMap;
