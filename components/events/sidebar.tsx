import Link from "next/link";
import Image from "next/image";
import {
  Enum_Componenteventsmedia_Type,
  Enum_Event_Status,
  EventDetailsFragment,
} from "../../models/graphql";
import payment1 from "../../styles/images/payment/payment1.png";
import payment2 from "../../styles/images/payment/payment2.png";
import payment3 from "../../styles/images/payment/payment3.png";
import Html from "../layout/html";
import EventTime from "./time";
import EventStatus from "./status";
import { useRouter } from "next/router";

const EventSidebar = (props: { event: EventDetailsFragment }) => {
  const { event } = props;

  const router = useRouter();
  const url = router.asPath;
  const eventName = encodeURI(event.name);
  const text = encodeURI("Take a look at #play14 ") + eventName;

  return (
    <aside className="events-details-info">
      <h4 className="orange pb-3" style={{ textAlign: "center" }}>
        <EventStatus status={event.status} />
      </h4>
      <ul className="info">
        <li>
          <div className="d-flex justify-content-between align-items-center">
            <span>Start</span>
            <EventTime time={event.start} timezone={event.timezone} />
          </div>
        </li>
        <li>
          <div className="d-flex justify-content-between align-items-center">
            <span>End</span>
            <EventTime time={event.end} timezone={event.timezone} />
          </div>
        </li>
        {event.timezone && (
          <li>
            <div className="d-flex justify-content-between align-items-center">
              <span>Timezone</span>
              {event.timezone}
            </div>
          </li>
        )}
        <li>
          <div className="d-flex justify-content-between align-items-center">
            <span>Registered</span>
            {event.players?.data.length}
          </div>
        </li>

        {event.media &&
          event.media.map(
            (medium) =>
              medium && (
                <li key={medium.id}>
                  <div className="d-flex justify-content-between align-items-center">
                    <span>{medium.type}</span>
                    <Link href={medium.url || "#"} target="_blank">
                      {medium.type == Enum_Componenteventsmedia_Type.Photos && (
                        <>
                          <i className="bx bx-photo-album"></i> go to album
                        </>
                      )}
                      {medium.type == Enum_Componenteventsmedia_Type.Videos && (
                        <>
                          <i className="bx bx-video"></i> go to library
                        </>
                      )}
                    </Link>
                  </div>
                </li>
              )
          )}

        {/* <li>
          <div className="d-flex justify-content-between align-items-center">
            <span>Pay With</span>
            <div className="payment-method">
              <Image
                src={payment1}
                className="shadow"
                alt="payment-card"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
              <Image
                src={payment2}
                className="shadow"
                alt="payment-card"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
              <Image
                src={payment3}
                className="shadow"
                alt="payment-card"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>
        </li> */}

        {event.status == Enum_Event_Status.Open &&
          event.registration &&
          event.registration.widgetCode && (
            <li>
              <Html>{event.registration.widgetCode}</Html>
            </li>
          )}
      </ul>

      {event.status == Enum_Event_Status.Open &&
        event.registration &&
        event.registration.link && (
          <div className="btn-box">
            <Link
              href={event.registration.link}
              target="_blank"
              className="default-btn"
            >
              <i className="flaticon-user"></i>Book Now
            </Link>
            {/* <p>
              You must <Link href="/login">login</Link> before registering an
              event.
            </p> */}
          </div>
        )}

      {(event.status == Enum_Event_Status.Open ||
        event.status == Enum_Event_Status.Announced) && (
        <div className="events-share">
          <div className="share-info">
            <span>
              Share this event <i className="flaticon-share"></i>
            </span>

            <ul className="social-link">
              <li>
                <Link
                  href={`http://www.facebook.com/sharer.php?u=${url}&p[title]=${text}`}
                  target="_blank"
                  rel="noopener"
                  className="d-block"
                >
                  <i className="bx bxl-facebook"></i>
                </Link>
              </li>
              <li>
                <Link
                  href={`http://twitter.com/share?url=${url}&text=${text}`}
                  target="_blank"
                  rel="noopener"
                  className="d-block"
                >
                  <i className="bx bxl-twitter"></i>
                </Link>
              </li>
              <li>
                <Link
                  href={`http://pinterest.com/pin/create/button/?url=${url}&description=${text}`}
                  target="_blank"
                  rel="noopener"
                  className="d-block"
                >
                  <i className="bx bxl-pinterest"></i>
                </Link>
              </li>
              <li>
                <Link
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${text}`}
                  target="_blank"
                  rel="noopener"
                  className="d-block"
                >
                  <i className="bx bxl-linkedin"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </aside>
  );
};

export default EventSidebar;
