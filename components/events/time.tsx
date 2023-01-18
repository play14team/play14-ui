import Moment from "react-moment";

const EventTime = (props: { time: Date }) => {
  return <Moment format="ddd, MMM Do - HH:mm">{props.time}</Moment>;
};

export default EventTime;
