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
import Page from "../../components/layout/page";

const Players: NextPage = () => {
  const [pageSize] = useState(60);
  const [page, setPage] = useState(1);

  const { data, loading, error } = useQuery(PlayersDocument, {
    variables: { page: page, pageSize: pageSize },
  });

  const players = data?.players?.data as PlayerEntity[];
  const pagination = data?.players?.meta.pagination as Pagination;

  return (
    <Page pageName="Players" loading={loading} error={error}>
      {data && (
        <div>
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
        </div>
      )}
    </Page>
  );
};

export default Players;
