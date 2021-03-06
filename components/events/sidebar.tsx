import Image from "next/image";
import Link from "next/link";
import payment1 from "../../styles/images/payment/payment1.png";
import payment2 from "../../styles/images/payment/payment2.png";
import payment3 from "../../styles/images/payment/payment3.png";

interface EventSidebarProps {
  status: string;
}

const EventSidebar = ({ status }: EventSidebarProps) => {
  return status == "Open" ? (
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
              <Image src={payment1} className="shadow" alt="payment-card" />
              <Image src={payment2} className="shadow" alt="payment-card" />
              <Image src={payment3} className="shadow" alt="payment-card" />
            </div>
          </div>
        </li>
      </ul>

      <div className="btn-box">
        <Link href="#">
          <a className="default-btn">
            <i className="flaticon-user"></i>
            Book Now<span></span>
          </a>
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
              <Link href="#">
                <a className="d-block">
                  <i className="bx bxl-facebook"></i>
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="d-block">
                  <i className="bx bxl-twitter"></i>
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="d-block">
                  <i className="bx bxl-instagram"></i>
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="d-block">
                  <i className="bx bxl-linkedin"></i>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  ) : (
    <h3>This event is {status}</h3>
  );
};

export default EventSidebar;
