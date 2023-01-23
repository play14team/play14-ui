import Link from "next/link";
import Image from "next/image";
import { EventDetailsFragment } from "../../models/graphql";
import payment1 from "../../styles/images/payment/payment1.png";
import payment2 from "../../styles/images/payment/payment2.png";
import payment3 from "../../styles/images/payment/payment3.png";
import Html from "../layout/html";

const EventSidebar = (props: { event: EventDetailsFragment }) => {
  const { event } = props;

  const url = encodeURI(window.location.href);
  const eventName = encodeURI(event.name);
  const text = encodeURI("Take a look at #play14 ") + eventName;

  return (
    <div className="events-details-info">
      <ul className="info">
        {/*   <li className="price">
            <div className="d-flex justify-content-between align-items-center">
              <span>Cost</span>
              $149
            </div>
          </li>
          <li>
            <div className="d-flex justify-content-between align-items-center">
              <span>Total Slot</span>
              1500
            </div>
          </li>
          <li>
            <div className="d-flex justify-content-between align-items-center">
              <span>Booked Slot</span>
              350
            </div>
          </li> */}
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

        {event.registration && event.registration.widgetCode && (
          <li>
            <Html>{event.registration.widgetCode}</Html>
          </li>
        )}
      </ul>

      {event.registration && event.registration.link && (
        <div className="btn-box">
          <Link
            href={event.registration.link}
            target="_blank"
            className="default-btn"
          >
            <i className="flaticon-user"></i>Book Now<span></span>
          </Link>
          {/* <p>
              You must <Link href="/login">login</Link> before registering an
              event.
            </p> */}
        </div>
      )}

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
    </div>
  );
};

export default EventSidebar;
