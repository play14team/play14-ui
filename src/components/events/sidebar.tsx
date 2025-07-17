import Link from "next/link"
import {
  Enum_Componenteventsmedia_Type,
  Enum_Event_Status,
  Event,
  PlayerEntity,
} from "../../models/graphql"
import SocialLinks from "../layout/social-links"
import EventStatus from "./status"
import EventTime from "./time"

const EventSidebar = ({
  event,
}: {
  event: Event
  participants: PlayerEntity[]
}) => {
  const eventName = encodeURI(event.name!)
  const text = encodeURI("Take a look at #play14 ") + eventName

  return (
    <aside className="events-details-info">
      <h4 className="orange pb-3" style={{ textAlign: "center" }}>
        <EventStatus status={event.status} />
      </h4>
      <ul className="info">
        <li>
          <div className="d-flex justify-content-between align-items-center">
            <span>Start</span>
            <EventTime time={event.start} timezone={event.timezone!} />
          </div>
        </li>
        <li>
          <div className="d-flex justify-content-between align-items-center">
            <span>End</span>
            <EventTime time={event.end} timezone={event.timezone!} />
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
        {/* <li>
          <div className="d-flex justify-content-between align-items-center">
            <span>Registered</span>
            {participants.length}
          </div>
        </li> */}

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
              ),
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
            <SocialLinks text={text} className="social-link" />
          </div>
        </div>
      )}
    </aside>
  )
}

export default EventSidebar
