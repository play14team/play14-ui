import { useQuery } from "@apollo/client";
import type { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import Page from "../../components/layout/page";
import PlayerDetails from "../../components/players/details";
import { client } from "../../graphql/apollo";
import { Player, PlayerDocument } from "../../models/graphql";

export const getServerSideProps: GetServerSideProps<{
  player: Player;
}> = async (context) => {
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
