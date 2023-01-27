import { EventLocation, Maybe, Scalars } from "../../models/graphql";

const Location = (props: {
  city?: Maybe<Scalars["String"]>;
  country?: Maybe<Scalars["String"]>;
}) => {
  const { city, country } = props;
  return (
    <>
      {city}
      {city || country ? ", " : ""}
      {country}
    </>
  );
};

export default Location;
