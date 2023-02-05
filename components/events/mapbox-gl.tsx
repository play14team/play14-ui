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

    const clusters = getClusters(events);

    Object.keys(clusters).map((venueId) => {
      const events: EventEntity[] = clusters[venueId];
      const popupContent = <Popup events={events} />;
      const popupNode = document.createElement("div");
      createRoot(popupNode).render(popupContent);

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

const Popup = (props: { events: EventEntity[] }) => {
  const { events } = props;

  const venue = events[0].attributes!.venue!.data!.attributes!;

  return (
    <>
      <Link href={venue.website || "#"} target="_blank" className="orange">
        <b>{venue.name}</b>
      </Link>
      <br />
      {venue.address}
      <hr />
      {events.map((event) => {
        const slug = event.attributes!.slug;
        const name = event.attributes!.name;
        const start = event.attributes!.start;
        const end = event.attributes!.end;
        const status = event.attributes!.status;

        const color = mapColor(status);
        const style = { color: color };

        return (
          <div key={name}>
            <div className="d-flex justify-content-between">
              <b>
                <Link href={`/events/${slug}`} style={style}>
                  {name}
                </Link>
              </b>
              {status == Enum_Event_Status.Open &&
                event.attributes?.registration?.link && (
                  <Link
                    href={event.attributes.registration.link}
                    target="_blank"
                    style={style}
                  >
                    <b>Register now</b>
                  </Link>
                )}
            </div>
            <div className="d-flex justify-content-between pb-2">
              <span>
                <EventDate start={start} end={end} />
              </span>
              {status}
            </div>
          </div>
        );
      })}
    </>
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

export default MapboxMap;
