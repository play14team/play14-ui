import { useQuery } from "@apollo/client";
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Loader from "../../components/layout/loader";
import Error from "../../components/layout/error";
import PlayerGrid from "../../components/players/grid";
import { graphql } from "../../models";
import Paging from "../../components/layout/paging";
import { Pagination } from "../../models/graphql";

const PlayersQuery = graphql(`
  query Players($page: Int!, $pageSize: Int!) {
    players(
      sort: "name:asc"
      pagination: { page: $page, pageSize: $pageSize }
    ) {
      data {
        attributes {
          ...PlayerItem
        }
      }
      meta {
        pagination {
          page
          pageSize
          total
          pageCount
        }
      }
    }
  }
`);

const Players: NextPage = () => {
  const [pageSize] = useState(60);
  const [page, setPage] = useState(1);

  const { data, loading, error } = useQuery(PlayersQuery, {
    variables: { page: page, pageSize: pageSize },
  });

  if (loading) return <Loader />;
  if (error) return <Error message={error.message} />;

  const pagination = data?.players?.meta.pagination as Pagination;

  return (
    <section id="players">
      <Head>
        <title>#play14 - Players</title>
      </Head>
      <Paging
        pagination={pagination}
        onNextPage={(nextPage) => setPage(nextPage)}
      />
      <PlayerGrid players={data?.players} />
    </section>
  );
};

export default Players;
