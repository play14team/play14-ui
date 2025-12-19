import { ComponentEventsSponsorship } from "@/models/strapi"
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
            const sponsors = item?.sponsors
            const category = item?.category
            return (
              <div key={item.id}>
                {sponsors?.map((sponsor, index) => {
                  return (
                    sponsor && (
                      <EventSponsor
                        key={`${item.id}-${index}`}
                        sponsor={sponsor}
                        category={category}
                      />
                    )
                  )
                })}
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default EventSponsorships
