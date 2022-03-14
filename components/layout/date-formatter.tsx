import { format, parseISO } from "date-fns";

type DateToFormat = Date | string;

type DateProps = {
  date: DateToFormat;
  formatString: string;
  className?: string;
};

const DateFormatter = ({ date, formatString, className }: DateProps) => {
  if (date == null) return null;

  const dateToFormat = typeof date == "string" ? parseISO(date) : date;
  return (
    <time dateTime={dateToFormat.toString()} className={className}>
      {format(dateToFormat, formatString)}
    </time>
  );
};

export default DateFormatter;
