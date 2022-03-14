import type { NextPage } from "next";
import Head from "next/head";
import EventGrid from "../components/events/grid";
import { EventSummary } from "../components/events/types";
import { DataProps } from "../libs/common";
import qs from "qs";
import Title from "../components/layout/title";

const Home: NextPage<DataProps<EventSummary[]>> = ({ data, meta }) => {
  return (
    <>
      <Head>
        <title>#play14</title>
      </Head>
      <Title />
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

  const url = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/events?${query}`;
  const response = await fetch(url);
  const result: DataProps<Event> = await response.json();

  return {
    props: result,
    revalidate: 10,
  };
}
