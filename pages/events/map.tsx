import React from "react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Loader from "../../components/layout/loader";
import Page from "../../components/layout/page";
import MapboxMap from "../../components/layout/mapbox-gl";
import MapboxGL from "../../components/layout/react-mapbox-gl";
import Image from "next/image";
import { useQuery } from "@apollo/client";
import { EventEntity, MarkersDocument } from "../../models/graphql";

const DynamicMap = dynamic(
  () => import("../../components/layout/react-map-gl"),
  {
    ssr: false,
    loading: () => <Loader />,
  }
);

const MapPage: NextPage = () => {
  const { data, loading, error } = useQuery(MarkersDocument);
  const mapLoaded = (map: any) => {};

  const events = data?.events?.data as EventEntity[];

  return (
    <Page name="Events map" description="All the #play14 events on a map">
      <div style={{ height: "1000px", width: "100%" }} className="pt-70 pb-100">
        {loading && <Loader />}
        {!loading && (
          <MapboxMap
            initialOptions={{ center: [16, 41], zoom: 1.3 }}
            events={events}
            onMapLoaded={mapLoaded}
          />
        )}
      </div>

      {/* <div className="pb-100">
        <MapboxGL />
      </div> */}

      {/* <h3>React Map GL</h3>
      <div style={{ height: "1000px", width: "100%" }} className="pt-70 pb-100">
        <DynamicMap />
      </div> */}
    </Page>
  );
};

export default MapPage;
