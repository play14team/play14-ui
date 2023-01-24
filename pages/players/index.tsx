import { useQuery } from "@apollo/client";
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Loader from "../../components/layout/loader";
import ErrorMessage from "../../components/layout/error";
import PlayerGrid from "../../components/players/grid";
import Paging from "../../components/layout/paging";
import {
  Pagination,
  PlayerEntity,
  PlayersDocument,
} from "../../models/graphql";

const Players: NextPage = () => {
  const [pageSize] = useState(60);
  const [page, setPage] = useState(1);

  const { data, loading, error } = useQuery(PlayersDocument, {
    variables: { page: page, pageSize: pageSize },
  });

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error.message} />;

  const players = data?.players?.data as PlayerEntity[];
  const pagination = data?.players?.meta.pagination as Pagination;

  return (
    <section id="players">
      <Head>
        <title>#play14 - Players</title>
      </Head>
      <h1>Players</h1>
      <Paging
        pagination={pagination}
        onNextPage={(nextPage) => setPage(nextPage)}
      />
      <div className="pt-70">
        <PlayerGrid players={players} />
      </div>
      <Paging
        pagination={pagination}
        onNextPage={(nextPage) => setPage(nextPage)}
      />
    </section>
  );
};

export default Players;
