import { getClient } from "@/libs/apollo-client"
import { EventEntity, EventNavDocument } from "@/models/graphql"
import Link from "next/link"

export default async function Locations() {
  const { data } = await getClient().query({ query: EventNavDocument })
  const events = data.events?.data as EventEntity[]

  const locations = [
    ...new Set(
      events.map((a) => a.attributes?.location?.data?.attributes?.slug),
    ),
  ]

  return (
    <div className="blog-details-desc pb-70">
      <div className="article-footer">
        {locations.map((item, index) => (
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
