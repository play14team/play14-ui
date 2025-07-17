import { ComponentEventsSponsorship } from "../../models/graphql"
import EventSponsor from "./sponsor"

const EventSponsorships = (props: {
  sponsorships: Array<ComponentEventsSponsorship>
}) => {
  const { sponsorships } = props
  return (
    <div className="container">
      {sponsorships?.length > 0 && (
        <div className="section-title">
          <span className="sub-title">Sponsors</span>
        </div>
      )}
      <div className="row">
        {sponsorships &&
          sponsorships.map((item) => {
            const sponsors = item?.sponsors?.data
            const category = item?.category
            return (
              <>
                {sponsors?.map((item) => {
                  const sponsor = item.attributes
                  return (
                    sponsor && (
                      <EventSponsor
                        key={item.id}
                        sponsor={sponsor}
                        category={category}
                      />
                    )
                  )
                })}
              </>
            )
          })}
      </div>
    </div>
  )
}

export default EventSponsorships
