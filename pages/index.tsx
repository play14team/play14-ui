import type { NextPage } from "next";
import Head from "next/head";
import EventGrid from "../components/events/eventsgrid";
import { EventSummary } from "../components/events/eventtypes";
import { DataProps } from "../types/common";
import qs from "qs";

const Home: NextPage<DataProps<EventSummary[]>> = ({ data, meta }) => {
  return (
    <>
      <Head>
        <title>#play14</title>
      </Head>
      <EventGrid data={data} meta={meta} />
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const query = qs.stringify(
    {
      sort: ["start:asc"],
      fields: ["slug", "name", "start", "end", "status"],
      pagination: {
        pageSize: 3,
        page: 1,
      },
      // publicationState: 'live',
      // locale: ['en'],
    },
    {
      encodeValuesOnly: true,
    }
  );

  console.log(query);

  const url = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/events?${query}`;
  const response = await fetch(url);
  const result: DataProps<Event> = await response.json();

  return {
    props: result,
    revalidate: 10,
  };
}
