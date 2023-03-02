import { useQuery } from "@apollo/client";
import type { NextPage } from "next";
import { useState } from "react";
import GameGrid from "../../components/games/grid";
import Page from "../../components/layout/page";
import Paging from "../../components/layout/paging";
import { client } from "../../graphql/apollo";
import {
  GameEntity,
  GameNavDocument,
  GamesDocument,
  Pagination,
} from "../../models/graphql";

const Games: NextPage = () => {
  const [pageSize] = useState(18);
  const [page, setPage] = useState(1);

  const { data, loading, error } = useQuery(GamesDocument, {
    variables: { page: page, pageSize: pageSize },
  });

  const games = data?.games?.data as GameEntity[];
  const pagination = data?.games?.meta.pagination as Pagination;

  if (!loading) {
    client.query({ query: GameNavDocument });
  }

  return (
    <Page name="Games" loading={loading} error={error}>
      {data && (
        <>
          <Paging
            pagination={pagination}
            onNextPage={(nextPage) => setPage(nextPage)}
          />
          <GameGrid games={games} />
          <Paging
            pagination={pagination}
            onNextPage={(nextPage) => setPage(nextPage)}
          />
        </>
      )}
    </Page>
  );
};

export default Games;
