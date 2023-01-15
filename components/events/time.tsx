import Moment from "react-moment";

const EventTime = (props: { time: Date }) => {
  return <Moment format="dddd MMMM Do, HH:mm">{props.time}</Moment>;
};

export default EventTime;
