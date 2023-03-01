import { useQuery } from "@apollo/client";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import GameDetails from "../../components/games/details";
import Page from "../../components/layout/page";
import { GameDocument, Game } from "../../models/graphql";

const GameDetail: NextPage = () => {
  const router = useRouter();
  const slug = router.query.slug as string;
  const { data, loading, error } = useQuery(GameDocument, {
    variables: { slug: slug },
  });

  const game = data?.games?.data[0].attributes as Game;

  return (
    <Page
      name={game && game.name}
      description={
        game && game.summary?.substring(0, game.summary.indexOf(" ", 200))
      }
      loading={loading}
      error={error}
    >
      {game && <GameDetails game={game} />}
    </Page>
  );
};

export default GameDetail;
