import { dataAsArrayOf, query } from "@/libs/apollo-client"
import { deduplicate } from "@/libs/arrays"
import { EventEntity, EventNavDocument } from "@/models/graphql"
import Link from "next/link"

export default async function Statuses() {
  const response = await query({ query: EventNavDocument })
  const events = dataAsArrayOf<EventEntity>(response.events || { data: [] })
  const locations = deduplicate(events.map((a) => a.attributes?.status))

  return (
    <div className="blog-details-desc pb-70">
      <div className="article-footer">
        {locations.map((item, index) => (
          <div key={index} className="article-tags">
            <span>
              <i className="bx bx-calendar"></i>
            </span>

            <Link href={`/events/statuses/${item}`}>{item}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
