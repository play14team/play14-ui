import { useQuery } from "@apollo/client";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import ErrorMessage from "../../components/layout/error";
import Loader from "../../components/layout/loader";
import PlayerDetails from "../../components/players/details";
import { PlayerDocument } from "../../models/graphql";

const PlayerDetailsPage: NextPage = () => {
  const router = useRouter();
  const slug = router.query.slug as string;
  const { data, loading, error } = useQuery(PlayerDocument, {
    variables: { slug: slug },
  });

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error.message} />;

  const playerDetails = data?.players?.data[0].attributes;
  if (!playerDetails) {
    return <>Player {slug} not found!</>;
  }

  return <PlayerDetails player={playerDetails} />;
};

export default PlayerDetailsPage;
