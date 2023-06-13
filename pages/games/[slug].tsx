import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import GameDetails from "../../components/games/details";
import Page from "../../components/layout/page";
import { client } from "../../graphql/apollo";
import { GameDocument, Game, GameSlugsDocument } from "../../models/graphql";

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({ query: GameSlugsDocument });

  const paths = data.games?.data?.map((s) => {
    const { slug } = s.attributes;
    return {
      params: { slug },
    };
  });
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<{ game: Game }> = async (
  context
) => {
  const { slug } = context.params;
  const { data } = await client.query({
    query: GameDocument,
    variables: { slug: slug },
  });

  const game = data?.games?.data[0].attributes as Game;

  return {
    props: { game: game },
    revalidate: 10,
  };
};

const GameDetail: NextPage = (props: { game: Game }) => {
  const game = props.game as Game;

  return (
    <Page
      name={game && game.name}
      description={
        game && game.summary?.substring(0, game.summary.indexOf(" ", 200))
      }
    >
      {game && <GameDetails game={game} />}
    </Page>
  );
};

export default GameDetail;
