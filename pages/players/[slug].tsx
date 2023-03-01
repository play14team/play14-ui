import { useQuery } from "@apollo/client";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Page from "../../components/layout/page";
import PlayerDetails from "../../components/players/details";
import { Player, PlayerDocument } from "../../models/graphql";

const PlayerDetailsPage: NextPage = () => {
  const router = useRouter();
  const slug = router.query.slug as string;
  const { data, loading, error } = useQuery(PlayerDocument, {
    variables: { slug: slug },
  });

  const player = data?.players?.data[0].attributes as Player;

  return (
    <Page
      name={player && player.name}
      description={player ? `${player.name} (${player.position})` : ""}
      loading={loading}
      error={error}
    >
      {player && <PlayerDetails player={player} />}
    </Page>
  );
};

export default PlayerDetailsPage;
