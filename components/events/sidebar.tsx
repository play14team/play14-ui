import Image from "next/image";
import Link from "next/link";
import { EventDetailsFragment } from "../../models/graphql";
import payment1 from "../../styles/images/payment/payment1.png";
import payment2 from "../../styles/images/payment/payment2.png";
import payment3 from "../../styles/images/payment/payment3.png";

const EventSidebar = (props: { event: EventDetailsFragment }) => {
  const { event } = props;

  return event.status === "Open" ? (
    <div className="events-details-info">
      <ul className="info">
        <li className="price">
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
        </li>
        <li>
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
        </li>
      </ul>

      <div className="btn-box">
        <Link href="#" className="default-btn">
          <i className="flaticon-user"></i>Book Now<span></span>
        </Link>
        <p>
          You must <Link href="/login">login</Link> before register event.
        </p>
      </div>

      <div className="events-share">
        <div className="share-info">
          <span>
            Share This Course <i className="flaticon-share"></i>
          </span>

          <ul className="social-link">
            <li>
              <Link href="#" className="d-block">
                <i className="bx bxl-facebook"></i>
              </Link>
            </li>
            <li>
              <Link href="#" className="d-block">
                <i className="bx bxl-twitter"></i>
              </Link>
            </li>
            <li>
              <Link href="#" className="d-block">
                <i className="bx bxl-instagram"></i>
              </Link>
            </li>
            <li>
              <Link href="#" className="d-block">
                <i className="bx bxl-linkedin"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  ) : (
    <h3>This event is {event.status}</h3>
  );
};

export default EventSidebar;
