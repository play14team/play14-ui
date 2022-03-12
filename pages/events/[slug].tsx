import type { NextPage } from "next";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import Container from "../../components/container";
import EventDetails from "../../components/events/eventdetails";
import { Event } from "../../components/events/eventtypes";
import { DataProps, Slug } from "../../types/common";

const EventDetailsPage: NextPage<DataProps<Event>> = ({ data }) => {
  return (
    <>
      <Head>
        <title>#play14 - {data.name}</title>
        <meta name="description" content={data.description} />
      </Head>
      <Container>
        <EventDetails
          slug={data.slug}
          name={data.name}
          start={data.start}
          end={data.end}
          status={data.status}
          description={data.description}
        />
      </Container>
    </>
  );
};

export default EventDetailsPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const url = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/events?fields=slug`;
  const response = await fetch(url);
  const { data }: DataProps<Slug[]> = await response.json();

  const paths = data.map((s) => {
    return {
      params: { slug: s.slug },
    };
  });
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug;
  const url = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/events/${slug}`;
  const response = await fetch(url);
  const result: DataProps<Event> = await response.json();

  return {
    props: result,
    revalidate: 10,
  };
};
