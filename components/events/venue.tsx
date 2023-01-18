import Link from "next/link";
import { Venue } from "../../models/graphql";

const EventVenue = (props: { venue: Venue }) => {
  const { venue } = props;
  return (
    <div className="events-details-location">
      <Link href={venue.website as string} target="_blank">
        <h4>{venue.name}</h4>
      </Link>
      <p>
        {venue.area && (
          <>
            <i className="bx bx-map-alt"></i> {venue.area}
            <br />
          </>
        )}
        {venue.address && (
          <>
            <i className="bx bx-building"></i> {venue.address}
            <br />
          </>
        )}
      </p>
      {venue.embeddedMapUrl && <iframe src={venue.embeddedMapUrl}></iframe>}
    </div>
  );
};

export default EventVenue;
