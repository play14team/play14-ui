import { useQuery } from "@apollo/client";
import moment from "moment";
import { EventEntity, UpcomingEventsDocument } from "../../models/graphql";
import EventGrid from "../events/grid";
import ErrorMessage from "../layout/error";
import Loader from "../layout/loader";

const UpcomingEvents = () => {
  const today = moment().format();
  const { data, loading, error } = useQuery(UpcomingEventsDocument, {
    variables: { today: today },
  });

  const events = data?.events?.data as EventEntity[];

  return (
    <div className="container pt-70">
      <h3>Upcoming events</h3>
      {loading && <Loader />}
      {error && <ErrorMessage message={error.message} />}
      {events && <EventGrid events={events} />}
    </div>
  );
};

export default UpcomingEvents;
