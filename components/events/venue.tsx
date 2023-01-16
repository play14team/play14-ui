import Link from "next/link";
import { Venue } from "../../models/graphql";

const EventVenue = (props: { venue: Venue }) => {
  const { venue } = props;
  return (
    <div className="events-details-location">
      <h4>{venue.name}</h4>
      <p>
        {venue.area && (
          <>
            <i className="bx bx-map-alt"></i> {venue.area}
            <br />
          </>
        )}
        {venue.address && (
          <>
            <i className="bx bx-map"></i> {venue.address}
            <br />
          </>
        )}
        {venue.website && (
          <>
            <i className="bx bx-globe"></i>{" "}
            <Link href={venue.website}>{venue.website}</Link>
          </>
        )}
      </p>
      {venue.embeddedMapUrl && <iframe src={venue.embeddedMapUrl}></iframe>}
    </div>
  );
};

export default EventVenue;
