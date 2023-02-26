import { useQuery } from "@apollo/client";
import { Game, GameNavDocument } from "../../models/graphql";
import DetailsNavigator, { NavLink } from "../layout/detailsnav";

const GamesNavigator = (props: { current: string }) => {
  const { data, loading } = useQuery(GameNavDocument);
  const { current } = props;

  if (loading) return;

  const games = data.games?.data;
  const index = games.findIndex((a) => a.attributes?.slug == current);
  const previous = index > 0 ? games[index - 1] : null;
  const next = index < games.length - 1 ? games[index + 1] : null;

  return (
    <DetailsNavigator
      previous={getLink(previous?.attributes as Game)}
      next={getLink(next?.attributes as Game)}
      entity="games"
    />
  );
};

const getLink = (game: Game): NavLink => {
  if (!game) return null;

  return {
    slug: game.slug,
    name: game.name,
    image: game.defaultImage.data.attributes,
    date: game.publishedAt!,
  };
};

export default GamesNavigator;
