import { useQuery } from "@apollo/client";
import { EventSlugsDocument } from "../../models/graphql";
import DetailsNavigator from "../layout/detailsnav";

const EventsNavigator = (props: { current: string }) => {
  const { data } = useQuery(EventSlugsDocument);
  const slugs = data?.events?.data.map((i) => i.attributes?.slug as string);
  return <DetailsNavigator current={props.current} slugs={slugs} />;
};

export default EventsNavigator;
