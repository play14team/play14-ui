import { dataAsArrayOf, query } from "@/libs/apollo-client"
import { deduplicate } from "@/libs/arrays"
import { EventEntity, EventNavDocument } from "@/models/graphql"
import Link from "next/link"

export default async function Locations() {
  const response = await query({ query: EventNavDocument })
  const events = dataAsArrayOf<EventEntity>(response.events || { data: [] })
  const locations = deduplicate(
    events.map((a) => a.attributes?.location?.data?.attributes?.slug),
  )

  return (
    <div className="blog-details-desc pb-70">
      <div className="article-footer">
        {locations.sort().map((item, index) => (
          <div key={index} className="article-tags">
            <span>
              <i className="bx bx-map-pin"></i>
            </span>

            <Link href={`/events/locations/${item}`}>
              {
                events.find(
                  (e) => e.attributes?.location?.data?.attributes?.slug == item,
                )?.attributes?.location?.data?.attributes?.name
              }
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
