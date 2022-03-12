import styles from "../../styles/Home.module.css";
import { DataProps } from "../../types/common";

import EventCard from "./eventcard";
import { EventSummary } from "./eventtypes";

const EventsGrid = ({ data }: DataProps<EventSummary[]>) => {
  return (
    <>
      <h1 className={styles.title}>Welcome to #play14</h1>

      <p className={styles.description}>We believe in playfulness</p>

      <div className={styles.grid}>
        {data.map((event: EventSummary) => {
          return (
            <EventCard
              key={event.slug}
              slug={event.slug}
              name={event.name}
              start={event.start}
              end={event.end}
              status={event.status}
            />
          );
        })}
      </div>
    </>
  );
};

export default EventsGrid;
