import EventCard from "./card";
import { useQuery } from "@apollo/client";
import { graphql } from "../../models";

const allEventsQueryDocument = graphql(`
  query Events($first: Int!) {
    events(sort: "start:desc", pagination: { limit: $first }) {
      data {
        id
        attributes {
          ...EventItem
        }
      }
    }
  }
`);

const EventsGrid = (props: { first: number }) => {
  const { data, loading, error } = useQuery(allEventsQueryDocument, {
    variables: { first: props.first },
  });

  if (loading) return <>Loading...</>;
  if (error) {
    console.log(error);
    return <>{error.message}</>;
  }

  return (
    <div className="events-area pt-100 pb-70">
      <div className="container">
        <div className="row">
          {data &&
            data.events?.data.map(
              (event) =>
                event.attributes && (
                  <EventCard key={event.id} event={event.attributes} />
                )
            )}
        </div>
      </div>
    </div>
  );
};

export default EventsGrid;
