import Moment from "react-moment";
import "moment-timezone";

const EventTime = (props: { time: Date; timezone: string }) => {
  return <Moment format="ddd, MMM Do - HH:mm">{props.time}</Moment>;
};

export default EventTime;
