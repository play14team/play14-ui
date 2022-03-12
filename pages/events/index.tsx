import type { NextPage } from "next";
import Head from "next/head";
import EventGrid from "../../components/events/grid";
import { EventSummary } from "../../components/events/types";
import { DataProps } from "../../types/common";
import qs from "qs";

const Events: NextPage<DataProps<EventSummary[]>> = ({ data, meta }) => {
  return (
    <>
      <Head>
        <title>#play14 - Events</title>
        <meta
          name="description"
          content="All #play14 events thoughout the globe"
        />
      </Head>
      <EventGrid data={data} meta={meta} />
    </>
  );
};

export default Events;

export async function getStaticProps() {
  const query = qs.stringify(
    {
      sort: ["start:asc"],
      fields: ["slug", "name", "start", "end", "status"],
      // pagination: {
      //   pageSize: 10,
      //   page: 1,
      // },
      // publicationState: 'live',
      // locale: ['en'],
    },
    {
      encodeValuesOnly: true,
    }
  );

  const url = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/events?${query}`;
  const response = await fetch(url);
  const result: DataProps<Event> = await response.json();

  return {
    props: result,
    revalidate: 10,
  };
}
