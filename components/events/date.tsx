import DateFormatter from "../layout/date-formatter";

interface EventDatesProps {
  start: Date;
  end: Date;
  className?: string;
}

const EventDate = ({ start, end, className }: EventDatesProps) => {
  const firstFormat = "MMMM dd";
  const secondFormat = `${
    new Date(start).getMonth() != new Date(end).getMonth() ? "MMMM" : ""
  }dd yyyy`;

  return (
    <>
      <DateFormatter
        date={start}
        formatString={firstFormat}
        className="published"
      />
      -
      <DateFormatter
        date={end}
        formatString={secondFormat}
        className="published"
      />
    </>
  );
};

export default EventDate;
