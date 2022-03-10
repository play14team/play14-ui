import styles from "../../styles/Home.module.css";

import DateFormatter from "../date-formatter";
import Link from "next/link";
import { Event } from "./eventtypes";

const EventItem = (event: Event) => {
  return (
    <Link href={`/events/${encodeURIComponent(event.slug)}`}>
      <a className={styles.card}>
        <h2>{event.name}</h2>
        <p>
          Start :{" "}
          <DateFormatter date={event.start} formatString="dd MMM yyyy" />
        </p>
        <p>
          End: <DateFormatter date={event.end} formatString="dd MMM yyyy" />
        </p>
        <h3>{event.status}</h3>
      </a>
    </Link>
  );
};

export default EventItem;
