import styles from "../../styles/Home.module.css";

import Container from "../container";
import EventCard from "./eventcard";
import { Event, Entity, EventsProps } from "./eventtypes";

const EventsGrid = ({ events }: EventsProps) => {
  return (
    <Container>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>Welcome to #play14</h1>

          <p className={styles.description}>We believe in playfulness</p>

          <div className={styles.grid}>
            {events.map((event: Entity<Event>) => {
              return (
                <EventCard
                  key={event.id}
                  slug={event.attributes.slug}
                  name={event.attributes.name}
                  start={event.attributes.start}
                  end={event.attributes.end}
                  status={event.attributes.status}
                  description={event.attributes.description}
                />
              );
            })}
          </div>
        </main>
      </div>
    </Container>
  );
};

export default EventsGrid;
