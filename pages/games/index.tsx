import { useQuery } from "@apollo/client";
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import GameGrid from "../../components/games/grid";
import ErrorMessage from "../../components/layout/error";
import Loader from "../../components/layout/loader";
import Page from "../../components/layout/page";
import Paging from "../../components/layout/paging";
import { GameEntity, GamesDocument, Pagination } from "../../models/graphql";

const Games: NextPage = () => {
  const [pageSize] = useState(18);
  const [page, setPage] = useState(1);

  const { data, loading, error } = useQuery(GamesDocument, {
    variables: { page: page, pageSize: pageSize },
  });

  const games = data?.games?.data as GameEntity[];
  const pagination = data?.games?.meta.pagination as Pagination;

  return (
    <Page pageName="Games" loading={loading} error={error}>
      {data && (
        <div>
          <Paging
            pagination={pagination}
            onNextPage={(nextPage) => setPage(nextPage)}
          />
          <div className="pt-70">
            <GameGrid games={games} />
          </div>
          <Paging
            pagination={pagination}
            onNextPage={(nextPage) => setPage(nextPage)}
          />
        </div>
      )}
    </Page>
  );
};

export default Games;
