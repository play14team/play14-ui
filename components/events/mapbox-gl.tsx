import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Enum_Event_Status, EventEntity } from "../../models/graphql";
import ReactDOM from "react-dom";
import Link from "next/link";
import EventDate from "./date";
import { createRoot } from "react-dom/client";
import EventStatus from "./status";

interface MapboxMapProps {
  initialOptions?: Omit<mapboxgl.MapboxOptions, "container">;
  events: EventEntity[];
  onMapLoaded?(map: mapboxgl.Map): void;
  onMapRemoved?(): void;
}

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

const MapboxMap = ({
  initialOptions = {},
  events,
  onMapLoaded,
  onMapRemoved,
}: MapboxMapProps) => {
  const [map, setMap] = useState<mapboxgl.Map>();
  const mapNode = useRef(null);

  useEffect(() => {
    const node = mapNode.current;

    if (typeof window === "undefined" || node === null) return;

    const mapboxMap = new mapboxgl.Map({
      container: node,
      accessToken: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [0, 0],
      zoom: 5,
      cooperativeGestures: false,
      ...initialOptions,
    });

    setMap(mapboxMap);

    const clusters = events.reduce((clusters: any, event) => {
      const venueId = event.attributes!.venue!.data!.id!;
      clusters[venueId] = clusters[venueId] || [];
      clusters[venueId].push(event);
      return clusters;
    }, {});

    Object.keys(clusters).map((venueId) => {
      const events: EventEntity[] = clusters[venueId];

      const popupNode = document.createElement("div");
      const node = createRoot(popupNode);
      const venue = events[0].attributes!.venue!.data!.attributes!;

      const eventContent = events.map((event) => {
        const slug = event.attributes!.slug;
        const name = event.attributes!.name;
        const start = event.attributes!.start;
        const end = event.attributes!.end;
        const status = event.attributes!.status;

        return (
          <div key={name}>
            <div className="d-flex justify-content-between">
              <b>
                <Link href={`/events/${slug}`}>{name}</Link>
              </b>
              {status}
            </div>
            <div className="pb-2">
              <EventDate start={start} end={end} />
            </div>
          </div>
        );
      });
      const popupContent = (
        <div>
          <Link href={venue.website || "#"} target="_blank">
            <b>{venue.name}</b>
          </Link>
          <br />
          {venue.address}
          <hr />
          {eventContent}
        </div>
      );

      node.render(popupContent);
      events.map((event) => {
        const status = event.attributes!.status;
        const { longitude, latitude } =
          event.attributes!.venue!.data!.attributes!.location;
        new mapboxgl.Marker({
          color: mapColor(status),
        })
          .setLngLat([longitude, latitude])
          .setPopup(new mapboxgl.Popup().setDOMContent(popupNode))
          .addTo(mapboxMap);
      });
    });

    mapboxMap.addControl(new mapboxgl.FullscreenControl());
    mapboxMap.addControl(new mapboxgl.NavigationControl(), "top-right");

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
