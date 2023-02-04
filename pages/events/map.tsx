import React from "react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Loader from "../../components/layout/loader";
import Page from "../../components/layout/page";

const DynamicMap = dynamic(() => import("../../components/layout/map"), {
  ssr: false,
  loading: () => <Loader />,
});

const MapPage: NextPage = () => {
  return (
    <Page name="Events map" description="All the #play14 events on a map">
      <div style={{ height: "1000px", width: "100%" }} className="pt-70 pb-100">
        <DynamicMap />
      </div>
    </Page>
  );
};

export default MapPage;
