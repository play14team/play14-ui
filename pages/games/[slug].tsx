import { useQuery } from "@apollo/client";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import GameDetails from "../../components/games/details";
import ErrorMessage from "../../components/layout/error";
import Loader from "../../components/layout/loader";
import { GameDocument } from "../../models/graphql";

const GameDetail: NextPage = () => {
  const router = useRouter();
  const slug = router.query.slug as string;
  const { data, loading, error } = useQuery(GameDocument, {
    variables: { slug: slug },
  });

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error.message} />;

  const gameDetails = data?.games?.data[0].attributes;
  if (!gameDetails) {
    return <>Game {slug} not found!</>;
  }

  return <GameDetails game={gameDetails} />;
};

export default GameDetail;
