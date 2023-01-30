import { useQuery } from "@apollo/client";
import { GameSlugsDocument } from "../../models/graphql";
import DetailsNavigator from "../layout/detailsnav";

const GamesNavigator = (props: { current: string }) => {
  const { data } = useQuery(GameSlugsDocument);
  const slugs = data?.games?.data.map((i) => i.attributes?.slug as string);
  return (
    <DetailsNavigator current={props.current} slugs={slugs} listUrl="/games" />
  );
};

export default GamesNavigator;
