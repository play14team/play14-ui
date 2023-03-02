import { useQuery } from "@apollo/client";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import Page from "../../components/layout/page";
import PlayerDetails from "../../components/players/details";
import { client } from "../../graphql/apollo";
import {
  Player,
  PlayerDocument,
  PlayerSlugsDocument,
} from "../../models/graphql";

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({ query: PlayerSlugsDocument });

  const paths = data.players?.data?.map((s) => {
    const { slug } = s.attributes;
    return {
      params: { slug },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{ player: Player }> = async (
  context
) => {
  const { slug } = context.params;
  const { data } = await client.query({
    query: PlayerDocument,
    variables: { slug: slug },
  });

  const player = data?.players?.data[0].attributes as Player;

  return {
    props: { player: player },
  };
};

const PlayerDetailsPage: NextPage = (props: { player: Player }) => {
  const player = props.player;

  return (
    <Page
      name={player && player.name}
      description={player ? `${player.name} (${player.position})` : ""}
    >
      {player && <PlayerDetails player={player} />}
    </Page>
  );
};

export default PlayerDetailsPage;
