import { deduplicate } from "@/libs/arrays"
import { Event } from "@/models/strapi"
import Link from "next/link"
import { getEventNav } from "./get.action"

export default async function Statuses() {
  const events = (await getEventNav()) as Event[]
  const locations = deduplicate(events.map((a) => a.eventStatus))

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
