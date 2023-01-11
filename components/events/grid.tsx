import EventCard from "./card";
import { useQuery } from "@apollo/client";
import { graphql } from "../../models";

const allEventsQueryDocument = graphql(`
  query Events {
    events(sort: "start:desc", pagination: { limit: 9 }) {
      data {
        id
        attributes {
          ...EventItem
        }
      }
    }
  }
`);

const EventsGrid = () => {
  const { data, loading, error } = useQuery(allEventsQueryDocument, {
    variables: {},
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
            data.events &&
            data.events.data.map((event, index) => {
              return <EventCard key={event.id} evt={event.attributes} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default EventsGrid;
