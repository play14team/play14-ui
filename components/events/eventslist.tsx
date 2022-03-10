import styles from "../../styles/Home.module.css";

import Container from "../container";
import EventItem from "./eventitem";
import { Event, Entity, EventProps } from "./eventtypes";

const Events = ({ events }: EventProps) => {
  return (
    <Container>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>Welcome to #play14</h1>

          <p className={styles.description}>We believe in playfulness</p>

          <div className={styles.grid}>
            {events.map((event: Entity<Event>) => {
              return (
                <EventItem
                  key={event.id}
                  slug={event.attributes.slug}
                  name={event.attributes.name}
                  start={event.attributes.start}
                  end={event.attributes.end}
                  status={event.attributes.status}
                />
              );
            })}
          </div>
        </main>
      </div>
    </Container>
  );
};

export default Events;
