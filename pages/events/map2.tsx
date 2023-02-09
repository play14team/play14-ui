import React from "react";
import type { NextPage } from "next";
import Loader from "../../components/layout/loader";
import Page from "../../components/layout/page";
import MapboxMap from "../../components/events/mapbox-gl";
import { useQuery } from "@apollo/client";
import { EventEntity, MarkersDocument } from "../../models/graphql";
import ErrorMessage from "../../components/layout/error";

const MapPage: NextPage = () => {
  const { data, loading, error } = useQuery(MarkersDocument);
  const events = data?.events?.data as EventEntity[];

  return (
    <Page name="Events map" description="All the #play14 events on a map">
      <div style={{ height: "1000px", width: "100%" }} className="pt-70 pb-100">
        {loading && <Loader />}
        {error && <ErrorMessage message={error.message} />}
        {!loading && (
          <MapboxMap
            initialOptions={{ center: [15, 35], zoom: 1.5 }}
            events={events}
          />
        )}
      </div>
    </Page>
  );
};

export default MapPage;
