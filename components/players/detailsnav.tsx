import { useQuery } from "@apollo/client";
import { Player, PlayerNavDocument } from "../../models/graphql";
import DetailsNavigator, { NavLink } from "../layout/detailsnav";

const PlayersNavigator = (props: { current: string }) => {
  const { data, loading } = useQuery(PlayerNavDocument);
  const { current } = props;

  if (loading) return;

  const players = data.players?.data;
  const index = players.findIndex((a) => a.attributes?.slug == current);
  const previous = index > 0 ? players[index - 1] : null;
  const next = index < players.length - 1 ? players[index + 1] : null;

  return (
    <DetailsNavigator
      previous={getLink(previous?.attributes as Player)}
      next={getLink(next?.attributes as Player)}
      entity="players"
    />
  );
};

const getLink = (player: Player): NavLink => {
  if (!player) return null;

  return {
    slug: player.slug,
    name: player.name,
    image: player.avatar.data.attributes,
    date: player.updatedAt!,
  };
};

export default PlayersNavigator;
