import { useQuery } from "@apollo/client";
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import EventGrid from "../../components/events/grid";
import Loader from "../../components/layout/loader";
import ErrorMessage from "../../components/layout/error";
import { EventEntity, EventsDocument, Pagination } from "../../models/graphql";
import Paging from "../../components/layout/paging";
import Page from "../../components/layout/page";

const Events: NextPage = () => {
  const [pageSize] = useState(18);
  const [page, setPage] = useState(1);

  const { data, loading, error } = useQuery(EventsDocument, {
    variables: { page: page, pageSize: pageSize },
  });

  const events = data?.events?.data as EventEntity[];
  const pagination = data?.events?.meta.pagination as Pagination;

  return (
    <Page
      pageName="Events"
      description="All #play14 events thoughout the globe"
      loading={loading}
      error={error}
    >
      {data && (
        <div>
          <Paging
            pagination={pagination}
            onNextPage={(nextPage) => setPage(nextPage)}
          />
          <div className="pt-70">{events && <EventGrid events={events} />}</div>
          <Paging
            pagination={pagination}
            onNextPage={(nextPage) => setPage(nextPage)}
          />
        </div>
      )}
    </Page>
  );
};

export default Events;
