import Link from "next/link";
import { Venue } from "../../models/graphql";
import Map from "../map";

const EventVenue = (props: { venue: Venue }) => {
  const { venue } = props;
  return (
    <div className="events-details-location">
      {venue.location && <Map location={venue.location} height={"450px"} />}
      {!venue.location && venue.embeddedMapUrl && (
        <iframe src={venue.embeddedMapUrl}></iframe>
      )}
    </div>
  );
};

export default EventVenue;
