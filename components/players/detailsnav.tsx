import { useQuery } from "@apollo/client";
import { PlayerSlugsDocument } from "../../models/graphql";
import DetailsNavigator from "../layout/detailsnav";

const PlayersNavigator = (props: { current: string }) => {
  const { data } = useQuery(PlayerSlugsDocument);
  const slugs = data?.players?.data.map((i) => i.attributes?.slug as string);

  return <DetailsNavigator current={props.current} slugs={slugs} />;
};

export default PlayersNavigator;
