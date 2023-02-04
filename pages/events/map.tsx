import { NextPage } from "next";
import EventMap from "../../components/events/map";
import Page from "../../components/layout/page";

const EventMapPage: NextPage = () => {
  return (
    <Page name="Events map" description="All #play14 events on a map">
      <div className="pt-70 pb-100">
        <EventMap />
      </div>
    </Page>
  );
};

export default EventMapPage;
