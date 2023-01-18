import Link from "next/link";
import { ComponentEventsTimetable, Maybe } from "../../models/graphql";

const EventSchedule = (props: {
  timetable: Array<Maybe<ComponentEventsTimetable>>;
}) => {
  const { timetable } = props;

  return (
    <div className="courses-curriculum">
      {timetable.map((item) => {
        return (
          item && (
            <div className="container">
              <h3>{item.day}</h3>
              {item.description}
              <ul>
                {item.timeslots &&
                  item.timeslots.map((slot) => {
                    return (
                      slot && (
                        <li>
                          <Link
                            href="#"
                            className="d-flex justify-content-between align-items-center"
                            onClick={(e) => e.preventDefault()}
                          >
                            <span className="courses-name">
                              {slot.description}
                            </span>
                            <div className="courses-meta">
                              <span className="status">
                                <i className="bx bx-alarm"></i>
                              </span>
                              <span className="duration">
                                {slot.time.substring(0, 5)}
                              </span>
                            </div>
                          </Link>
                        </li>
                      )
                    );
                  })}
              </ul>
              <br />
            </div>
          )
        );
      })}
    </div>
  );
};

export default EventSchedule;
