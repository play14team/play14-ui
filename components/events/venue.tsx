import Link from "next/link";
import { Venue } from "../../models/graphql";

const EventVenue = (props: { venue: Venue }) => {
  const { venue } = props;
  return (
    <div className="events-details-location">
      {venue.embeddedMapUrl && <iframe src={venue.embeddedMapUrl}></iframe>}
    </div>
  );
};

export default EventVenue;
