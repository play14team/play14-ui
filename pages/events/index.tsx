import { useQuery } from "@apollo/client";
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import EventGrid from "../../components/events/grid";
import Loader from "../../components/layout/loader";
import ErrorMessage from "../../components/layout/error";
import { EventEntity, EventsDocument, Pagination } from "../../models/graphql";
import Paging from "../../components/layout/paging";

const Events: NextPage = () => {
  const [pageSize] = useState(18);
  const [page, setPage] = useState(1);

  const { data, loading, error } = useQuery(EventsDocument, {
    variables: { page: page, pageSize: pageSize },
  });

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error.message} />;

  const events = data?.events?.data as EventEntity[];
  const pagination = data?.events?.meta.pagination as Pagination;

  return (
    <section id="events">
      <Head>
        <title>#play14 - Events</title>
        <meta
          name="description"
          content="All #play14 events thoughout the globe"
        />
      </Head>
      <h1>Events</h1>
      <Paging
        pagination={pagination}
        onNextPage={(nextPage) => setPage(nextPage)}
      />
      <div className="pt-70">
        <EventGrid events={events} />
      </div>
      <Paging
        pagination={pagination}
        onNextPage={(nextPage) => setPage(nextPage)}
      />
    </section>
  );
};

export default Events;
