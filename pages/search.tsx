import { useQuery } from "@apollo/client";
import Head from "next/head";
import { useRouter } from "next/router";
import EventGrid from "../components/events/grid";
import ErrorMessage from "../components/layout/error";
import Loader from "../components/layout/loader";
import PlayerGrid from "../components/players/grid";
import { EventEntity, PlayerEntity, SearchDocument } from "../models/graphql";

const SearchPage = () => {
  const router = useRouter();
  const { input } = router.query;
  const { data, loading, error } = useQuery(SearchDocument, {
    variables: { input: input as string },
  });

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error.message} />;

  const events = data?.search?.events?.data as EventEntity[];
  const players = data?.search?.players?.data as PlayerEntity[];

  return (
    <>
      <Head>
        <title>#play14 - Search</title>
      </Head>
      <div className="pt-70">
        <h3>Events</h3>
        {events && events.length > 0 && <EventGrid events={events} />}
        {!events ||
          (events.length == 0 && (
            <p className="pb-70">No corresponding event found</p>
          ))}
      </div>
      <div>
        <h3>Players</h3>
        {players && players.length > 0 && <PlayerGrid players={players} />}
        {!events ||
          (players.length == 0 && <p>No corresponding player found</p>)}
      </div>
    </>
  );
};

export default SearchPage;
