import { format, parseISO } from "date-fns";

type DateToFormat = Date | string;
type DateFormat = string | "dd MMM YYYY";

type Props = {
  date: DateToFormat;
  formatString: DateFormat;
};

const DateFormatter = ({ date, formatString }: Props) => {
  if (date == null) return null;

  const dateToFormat = typeof date === "string" ? parseISO(date) : date;
  return (
    <time dateTime={dateToFormat.toString()}>
      {format(dateToFormat, formatString)}
    </time>
  );
};

export default DateFormatter;
