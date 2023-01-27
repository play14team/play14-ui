import { EventLocation, Maybe, Scalars } from "../../models/graphql";

const Location = (props: { location: EventLocation }) => {
  const { location } = props;
  return (
    <>
      {location.name}
      {location.name && location.country ? ", " : ""}
      {location.country}
    </>
  );
};

export default Location;
