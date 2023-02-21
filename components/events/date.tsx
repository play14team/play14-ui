import DateFormatter from "../layout/date-formatter";

interface EventDatesProps {
  start: Date;
  end: Date;
  className?: string;
  displayYear?: boolean;
}

const EventDate = ({ start, end, displayYear }: EventDatesProps) => {
  const firstFormat = "MMMM dd";
  const secondFormat = `${
    new Date(start).getMonth() != new Date(end).getMonth() ? "MMMM " : ""
  }dd ${displayYear ? "yyyy" : ""}`;

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
