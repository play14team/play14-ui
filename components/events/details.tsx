import styles from "../../styles/Home.module.css";

import DateFormatter from "../layout/date-formatter";
import { Event } from "./types";

const EventDetails = (event: Event) => {
  return (
    <>
      <h1 className={styles.title}>{event.name}</h1>
      <h3 className={styles.description}>{event.status}</h3>
      <p className={styles.description}>
        Start : <DateFormatter date={event.start} formatString="dd MMM yyyy" />{" "}
        - End: <DateFormatter date={event.end} formatString="dd MMM yyyy" />
      </p>
    </>
  );
};

export default EventDetails;
