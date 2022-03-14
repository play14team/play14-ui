import { DataProps } from "../../libs/common";

import EventCard from "./card";
import { EventSummary } from "./types";

const EventsGrid = ({ data }: DataProps<EventSummary[]>) => {
  return (
    <div className="events-area pt-100 pb-70">
      <div className="container">
        <div className="row">
          {data.map((event: EventSummary, index) => {
            return <EventCard key={index} {...event} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default EventsGrid;
