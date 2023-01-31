import Image, { StaticImageData } from "next/image";

interface HistoryProps {
  year: string;
  month: string;
  day?: string;
  title: string;
  image?: string;
  imageAlt?: string;
  children: React.ReactNode;
}

const HistoryItem = (props: HistoryProps) => {
  const { year, month, day, title, image, imageAlt, children } = props;

  const sup = getSup(day);

  return (
    <li className="timeline-block">
      <div className="timeline-date">
        <span>{year}</span>
        {month} {day}
        <sup>{sup}</sup>
      </div>

      <div className="timeline-icon">
        <span className="dot-badge"></span>
      </div>

      <div className="timeline-content">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-12">
            <div className="content">
              <h3>{title}</h3>
              {children}
            </div>
          </div>

          {image && (
            <div className="col-lg-5 col-md-12">
              <div className="image">
                <Image
                  src={image}
                  alt={imageAlt || "image"}
                  width={250}
                  height={250}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

const getSup = (day: string) => {
  if (!day) return undefined;

  switch (day) {
    case "1":
    case "21":
    case "31":
      return "st";
    case "2":
    case "22":
      return "nd";
    case "3":
    case "23":
      return "rd";
    default:
      return "th";
  }
};

export default HistoryItem;
