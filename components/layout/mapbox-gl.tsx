import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Enum_Event_Status, EventEntity } from "../../models/graphql";
import moment from "moment";
import Link from "next/link";

interface MapboxMapProps {
  initialOptions?: Omit<mapboxgl.MapboxOptions, "container">;
  events: EventEntity[];
  onMapLoaded?(map: mapboxgl.Map): void;
  onMapRemoved?(): void;
}

const MapboxMap = ({
  initialOptions = {},
  events,
  onMapLoaded,
  onMapRemoved,
}: MapboxMapProps) => {
  const [map, setMap] = useState<mapboxgl.Map>();
  const mapNode = useRef(null);

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

  useEffect(() => {
    const node = mapNode.current;

    if (typeof window === "undefined" || node === null) return;

    const mapboxMap = new mapboxgl.Map({
      container: node,
      accessToken: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [0, 0],
      zoom: 5,
      ...initialOptions,
    });

    setMap(mapboxMap);

    events.map((event) => {
      const name = event.attributes?.name;
      const status = event.attributes?.status;
      const venue = event.attributes?.venue?.data?.attributes?.name;
      const address = event.attributes?.venue?.data?.attributes?.address;
      const { longitude, latitude } =
        event.attributes?.venue?.data?.attributes?.location;
      const start = event.attributes?.start;
      const end = event.attributes?.end;
      const slug = event.attributes?.slug;

      const link = `<a href="/events/${slug}">${name}</a>`;

      new mapboxgl.Marker({
        color: mapColor(status),
      })
        .setLngLat([longitude, latitude])
        .setPopup(
          new mapboxgl.Popup().setHTML(
            `<b>${link}</b><br/>${venue}<br/>${moment(start).format(
              "MMM Do"
            )} - ${moment(end).format("MMM Do")}<br/>${address}`
          )
        )
        .addTo(mapboxMap);
    });

    if (onMapLoaded) mapboxMap.once("load", onMapLoaded);

    return () => {
      mapboxMap.remove();
      if (onMapRemoved) onMapRemoved();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div ref={mapNode} style={{ width: "100%", height: "100%" }} />;
};

export default MapboxMap;
