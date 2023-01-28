import { useQuery } from "@apollo/client";
import moment from "moment";
import type { NextPage } from "next";
import Head from "next/head";
import EventGrid from "../components/events/grid";
import ErrorMessage from "../components/layout/error";
import Loader from "../components/layout/loader";
import Title from "../components/layout/title";
import { EventEntity, UpcomingEventsDocument } from "../models/graphql";

const Home: NextPage = () => {
  const today = moment().format();
  const { data, loading, error } = useQuery(UpcomingEventsDocument, {
    variables: { today: today },
  });

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error.message} />;

  const events = data?.events?.data as EventEntity[];

  return (
    <>
      <Head>
        <title>#play14 - play is the way</title>
      </Head>
      <div className="d-flex justify-content-center pt-70">
        <Title />
      </div>
      <div className="container pt-70">
        <h3>Upcoming events</h3>
        {events && <EventGrid events={events} />}
      </div>
    </>
  );
};

export default Home;
