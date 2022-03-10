import styles from "../../styles/Home.module.css";

import DateFormatter from "../date-formatter";
import { Event } from "./eventtypes";

const EventDetails = (event: Event) => {
  return (
    <>
      <h2>{event.name}</h2>
      <p>
        Start : <DateFormatter date={event.start} formatString="dd MMM yyyy" />
      </p>
      <p>
        End: <DateFormatter date={event.end} formatString="dd MMM yyyy" />
      </p>
      <h3>{event.status}</h3>
    </>
  );
};

export default EventDetails;
